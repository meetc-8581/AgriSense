import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherChart from "./WeatherChart";
import "./Weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [formatedData, setformatedData] = useState([]);

  async function getWeatherData() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const pointRes = await axios.get(
        `https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`,
        { withCredentials: false }
      );
      const weatherRes = await axios.get(
        pointRes.data.properties.forecastHourly,
        { withCredentials: false }
      );
      console.log(weatherRes.data.properties);
      setWeatherData(weatherRes.data.properties);

      const temp = weatherRes.data.properties.periods.map((period, index) => {
        return { x: period.startTime, y: period.temperature };
      });
      console.log("temp", temp);
      setformatedData(temp);
    });
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather-master-container">
      <div className="city-name">
        <h2>Weather</h2>
      </div>
      {weatherData?.periods && (
        <div className="weather-data-container">
          <WeatherChart data={formatedData} />
        </div>
      )}
    </div>
  );
}

export default Weather;
