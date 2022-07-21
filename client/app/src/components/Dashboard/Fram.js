import axios from "axios";
import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";

function Farm(props) {
  const [farmData] = useState(props.farm);
  const [tempData, setTempData] = useState([]);
  const [moistureData, setMoistureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [temperatureAirData, setTemperatureAirData] = useState([]);

  let queryDevice = "?deviceId=" + farmData.deviceId[0].toString();
  let queryDays = "&days=" + props.dateSelected.toString();

  let str = "/data/getbydevice" + queryDevice + queryDays;

  // console.log(str);

  async function getData() {
    const dataRes = await axios.get(str);

    setTempData(dataRes.data.tempProbeDataAvgArr);
    setMoistureData(dataRes.data.moistureDataAvgArr);
    setHumidityData(dataRes.data.humidityAirDataAvgArr);
    setTemperatureAirData(dataRes.data.temperatureAirAvgArr);

    console.log("inside Farm getData just excecuted");
  }

  function renderData() {
    return (
      <>
        <div className="line-chart">
          <div className="farm-lable">
            <span>Temperature data</span>
          </div>
          <LineChart
            data={tempData}
            seriesLable={"Temperature"}
            minLimit={0}
            maxLimit={100}
          />
        </div>
        <div className="line-chart">
          <div className="farm-lable">
            <span>Moisture data</span>
          </div>
          <LineChart
            data={moistureData}
            seriesLable={"Moisture"}
            minLimit={100}
            maxLimit={800}
          />
        </div>
        <div className="line-chart">
          <div className="farm-lable">
            <span>Humidity data</span>
          </div>
          <LineChart
            data={humidityData}
            seriesLable={"Humidity"}
            minLimit={0}
            maxLimit={100}
          />
        </div>
        <div className="line-chart">
          <div className="farm-lable">
            <span>Air Temperature data</span>
          </div>
          <LineChart
            data={temperatureAirData}
            seriesLable={"Air Temperature"}
            minLimit={0}
            maxLimit={100}
          />
        </div>
      </>
    );
  }

  useEffect(() => {
    getData();
  }, [props.dateSelected]);

  return <div className="chart-container">{renderData()}</div>;
}

export default Farm;
