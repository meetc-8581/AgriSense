const mongoose = require("mongoose");
const User = require("../models/userModel");
const Joi = require("joi");

const Data = new mongoose.model(
  "Data",
  new mongoose.Schema({
    deviceId: {
      type: Number,
      required: true,
      minLength: 5,
      maxLength: 50,
    },
    farmId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farm",
      required: true,
    },
    nSamples: {
      type: Number,
      max: 60,
      default: 0,
    },
    first: {
      type: Number,
      default: 0,
    },
    last: {
      type: Number,
      default: 0,
    },
    lastModified: {
      type: Date,
      required: true,
      default: Date.now,
    },
    temperatureProbe: [
      { _id: false, val: Number, timestamp: { type: Date, default: Date.now } },
    ],
    temperatureAir: [
      { _id: false, val: Number, timestamp: { type: Date, default: Date.now } },
    ],
    humidityAir: [
      { _id: false, val: Number, timestamp: { type: Date, default: Date.now } },
    ],
    moistureSoil: [
      { _id: false, val: Number, timestamp: { type: Date, default: Date.now } },
    ],
    valveState: {
      type: Boolean,
    },
  })
);

function validateData(user) {
  const schema = {
    deviceId: Joi.number().min(5).max(50).required(),
    nSamples: Joi.number(),
    farm: Joi.String(),
  };
  return Joi.validate(user, schema);
}

exports.Data = Data;
exports.validateData = validateData;
