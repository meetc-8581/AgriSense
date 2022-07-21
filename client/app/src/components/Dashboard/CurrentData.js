import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CurrentData.css";
import CurrentDataCard from "./CurrentDataCard";

function CurrentData(props) {
  const [farmData] = useState(props.farm);
  const [currentData, setCurrentData] = useState([]);

  let query = "?deviceId=" + farmData.deviceId[0].toString();

  let str = "/data/latestdata" + query;

  async function getCurrentData() {
    const currentRes = await axios.get(str);
    setCurrentData(currentRes.data);
    console.log("inside Current getCustomerData", currentData);
  }

  function renderCurrentData() {
    return (
      <>
        <CurrentDataCard
          dtype="Soil Moisture"
          data={currentData.moistureSoil}
        />
        <CurrentDataCard
          dtype="Soil Temperature"
          data={currentData.temperatureProbe}
        />
        <CurrentDataCard dtype="Air Humidity" data={currentData.tumidityAir} />
        <CurrentDataCard
          dtype="Air Temperature"
          data={currentData.temperatureAir}
        />
      </>
    );
  }

  useEffect(() => {
    getCurrentData();
  }, []);

  return (
    <>
      <div className="current-data-heading">
        <span>Current Data</span>
      </div>
      <div className="current-data-container">{renderCurrentData()}</div>
    </>
  );
}

export default CurrentData;
