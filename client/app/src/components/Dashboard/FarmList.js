import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrentData from "./CurrentData";
import FarmTab from "./FarmTab";
import Farm from "./Fram";
import "./FarmList.css";

function FarmList() {
  const [farmList, setFarmList] = useState([]);
  const [selected, setSelected] = useState();
  const [dateSelected, setDateSelected] = useState(1);

  const farmNames = farmList.map((f) => {
    return f.name;
  });

  async function getFarmList() {
    const farmRes = await axios.get("http://localhost:5000/api/farm");

    setFarmList(farmRes.data);
    // console.log(farmRes.data);
  }

  function renderFarms() {
    return farmList.map((farm) => {
      // console.log(farm.name);
      if (selected === farm.name)
        return (
          <div className="farmlist-container" key={farm.name}>
            <div className="farm-heading">
              <span>{farm.name}</span>
            </div>
            <div>
              <CurrentData farm={farm} />
            </div>
            <div className="farm-container">
              <div className="farm-container-heading">
                <span>Data Graphs</span>
                <div className="farm-day-selecter">
                  <ul>
                    <li
                      className={
                        dateSelected === 1 ? "farm-day-selecter-isactive" : ""
                      }
                    >
                      <a href="#/" onClick={() => setDateSelected(1)}>
                        Day
                      </a>
                    </li>
                    <li className="farm-day-selecter-spacer"></li>

                    <li
                      className={
                        dateSelected === 7 ? "farm-day-selecter-isactive" : ""
                      }
                    >
                      <a href="#/" onClick={() => setDateSelected(7)}>
                        Week
                      </a>
                    </li>
                    <li className="farm-day-selecter-spacer"></li>

                    <li
                      className={
                        dateSelected === 15 ? "farm-day-selecter-isactive" : ""
                      }
                    >
                      <a href="#/" onClick={() => setDateSelected(15)}>
                        15 Days
                      </a>
                    </li>
                    <li className="farm-day-selecter-spacer"></li>

                    <li
                      className={
                        dateSelected === 30 ? "farm-day-selecter-isactive" : ""
                      }
                    >
                      <a href="#/" onClick={() => setDateSelected(30)}>
                        Month
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Farm farm={farm} dateSelected={dateSelected} />
            </div>
          </div>
        );
      return null;
    });
  }

  useEffect(() => {
    getFarmList();
  }, []);

  return (
    <>
      <div>
        <FarmTab
          tabs={farmNames}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <div className="dasboard-master-container">{renderFarms()}</div>
    </>
  );
}

export default FarmList;
