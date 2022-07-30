import React from "react";
import "./WeatherDailyCard.css";

function WeatherDailyCard(props) {
  const { day } = props;
  return (
    <div className="daily-card">
      <h5 className="text-center">{day.name.substr(0, 3)}</h5>
      <p className="">
        <img className="day-icon" src={day.icon}></img>
      </p>

      <div>{day.temperature} </div>
    </div>
  );
}

export default WeatherDailyCard;
