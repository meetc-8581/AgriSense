import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState();

  return (
    <div className="weather-master-container">
      <h2>Weather</h2>
    </div>
  );
}

export default Weather;
