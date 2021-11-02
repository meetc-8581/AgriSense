const express = require("express");
const number = require("joi/lib/types/number");
const { lastIndexOf } = require("lodash");
const _ = require("lodash");

const router = express.Router();

const auth = require("../middleware/auth");
const { Data, validateData } = require("../models/dataModel.js");

router.get("/sortdata", auth, async (req, res) => {
  const deviceId = req.query.deviceId;

  let startDate = req.query.startDate;
  console.log(startDate);

  const data = await Data.find({
    // deviceId: deviceId,
    lastModified: {
      $gte: new Date(startDate),
      $lt: new Date("2021-04-19T12:33:35"),
    },
  });

  res.send(data);
});

router.get("/getbydevice", auth, async (req, res) => {
  let currentDate = new Date("2021-04-25T20:00:35.063Z");
  // console.log(currentDate);
  let pastDate = new Date("2021-04-14T20:00:35.063Z");
  pastDate.setDate(currentDate.getDate() - parseInt(req.query.days));
  // console.log(pastDate);
  let queryData = await Data.aggregate([
    {
      $match: { deviceId: parseInt(req.query.deviceId) },
    },
    {
      $match: {
        lastModified: {
          $gte: new Date(pastDate),
          $lt: new Date(currentDate),
        },
      },
    },
    {
      $project: {
        // only keep the required key value pairs
        temperatureProbe: 1,
        moistureSoil: 1,
        humidityAir: 1,
        temperatureAir: 1,
        _id: 0,
      },
    },
  ]);

  // console.log(queryData);

  let moistureDataAvgArr = [];
  let tempProbeDataAvgArr = [];
  let humidityAirDataAvgArr = [];
  let temperatureAirAvgArr = [];

  for (let i = 0; i < queryData.length; i++) {
    //moisture avg cal
    let moistureData = queryData[i].moistureSoil.map((d) => {
      return d.val;
    });

    let moistureDataAvg =
      moistureData.reduce((total, num) => {
        return total + num;
      }) / moistureData.length;

    // console.log("MOISTURE Avg", moistureDataAvg);

    let moistureTimestamp =
      queryData[i].moistureSoil[queryData[i].moistureSoil.length - 1];

    moistureDataAvgArr.push({
      timestamp: moistureTimestamp.timestamp,
      avg: moistureDataAvg,
    });

    //tempProbeData avg cal

    let tempProbeData = queryData[i].temperatureProbe.map((d) => {
      return d.val;
    });

    let tempProbeDataAvg =
      tempProbeData.reduce((total, num) => {
        return total + num;
      }) / tempProbeData.length;

    // console.log("Temperature Avg", tempProbeDataAvg);

    let tempProbeTimestamp =
      queryData[i].temperatureProbe[queryData[i].temperatureProbe.length - 1];

    tempProbeDataAvgArr.push({
      timestamp: tempProbeTimestamp.timestamp,
      avg: tempProbeDataAvg,
    });

    //humidity avg cal

    let humidityData = queryData[i].humidityAir.map((d) => {
      return d.val;
    });

    let humidityDataAvg =
      humidityData.reduce((total, num) => {
        return total + num;
      }) / humidityData.length;

    // console.log("Temperature Avg", humidityDataAvg);

    let humidityTimestamp =
      queryData[i].humidityAir[queryData[i].humidityAir.length - 1];

    humidityAirDataAvgArr.push({
      timestamp: humidityTimestamp.timestamp,
      avg: humidityDataAvg,
    });

    //Temperature Air avg cal

    let temperatureAirData = queryData[i].temperatureAir.map((d) => {
      return d.val;
    });

    let temperatureAirDataAvg =
      temperatureAirData.reduce((total, num) => {
        return total + num;
      }) / temperatureAirData.length;

    // console.log("MOISTURE Avg", temperatureAirDataAvg);

    let temperatureAirTimestamp =
      queryData[i].temperatureAir[queryData[i].temperatureAir.length - 1];

    temperatureAirAvgArr.push({
      timestamp: temperatureAirTimestamp.timestamp,
      avg: temperatureAirDataAvg,
    });
  }

  console.log("MOISTURE Avg Array", moistureDataAvgArr);
  console.log("TEMPERATURE Avg Array", tempProbeDataAvgArr);

  console.log("queryserved", req.query.deviceId);

  let responseAvg = {
    tempProbeDataAvgArr: tempProbeDataAvgArr,
    moistureDataAvgArr: moistureDataAvgArr,
    humidityAirDataAvgArr: humidityAirDataAvgArr,
    temperatureAirAvgArr: temperatureAirAvgArr,
  };

  res.send(responseAvg);
});

router.get("/latestdata", auth, async (req, res) => {
  let latestDataArr = await Data.aggregate([
    {
      // match according to deviceId
      $match: {
        deviceId: parseInt(req.query.deviceId),
        lastModified: {
          $lt: new Date(),
        },
      },
    },
    {
      $sort: { lastModified: -1 }, // Sort in decending order
    },
    {
      $limit: 1, // just extract the first result
    },
    {
      $project: {
        // only keep the required key value pairs
        temperatureProbe: 1,
        moistureSoil: 1,
        humidityAir: 1,
        temperatureAir: 1,
        _id: 0,
      },
    },
  ]);

  // Query returns an [array] of {object} of "key : value" pairs --- [{ sensorData : [[Object], [Object],...] }]
  // Extracting last objects of respective sensorData arrays
  // Forming a json object to send

  const latestDataToSend = {
    moistureSoil:
      latestDataArr[0].moistureSoil[latestDataArr[0].moistureSoil.length - 1]
        .val,

    temperatureProbe:
      latestDataArr[0].temperatureProbe[
        latestDataArr[0].temperatureProbe.length - 1
      ].val,

    tumidityAir:
      latestDataArr[0].humidityAir[latestDataArr[0].humidityAir.length - 1].val,

    temperatureAir:
      latestDataArr[0].temperatureAir[
        latestDataArr[0].temperatureAir.length - 1
      ].val,
  };

  console.log(latestDataToSend);
  res.send(latestDataToSend);
});

router.post("/send", async (req, res) => {
  try {
    temppro = { val: req.body.temperatureProbe };

    const result = await Data.updateOne(
      {
        deviceId: req.body.deviceId,
        farmId: req.body.farmId,
        nSamples: { $lt: 60 },
      },
      {
        $push: {
          temperatureProbe: { val: req.body.temperatureProbe },
          temperatureAir: { val: req.body.temperatureAir },
          humidityAir: { val: req.body.humidityAir },
          moistureSoil: { val: req.body.moistureSoil },
        },
        $min: { first: temppro },
        $max: { last: temppro },
        $currentDate: { lastModified: true },
        $inc: { nSamples: 1 },
        $set: { date: Date.now() },
      },
      { upsert: true }
    );
    console.log(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.error("error", err);
    return res.status(404).send("Something went Wrong sorry!");
  }
});

module.exports = router;
