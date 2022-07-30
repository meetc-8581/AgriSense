import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherChart from "./WeatherChart";
import "./Weather.css";
import WeatherDailyCard from "./WeatherDailyCard";

function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [formatedData, setformatedData] = useState([]);
  const [dailyWeatherData, setDailyWeatherData] = useState([]);
  const [city, setCity] = useState("");

  async function getHourlyForecast(points) {
    const weatherRes = await axios.get(points.data.properties.forecastHourly, {
      withCredentials: false,
    });
    // console.log(weatherRes.data.properties);
    setWeatherData(weatherRes.data.properties);

    const temp = weatherRes.data.properties.periods.map((period, index) => {
      return { x: period.startTime.substr(0, 19), y: period.temperature };
    });
    // console.log("temp", temp);
    setformatedData(temp);
  }

  async function getDailyForecast(points) {
    const weatherDailyRes = await axios.get(points.data.properties.forecast, {
      withCredentials: false,
    });
    setDailyWeatherData(weatherDailyRes.data.properties.periods);
    console.log("RES", weatherDailyRes.data);
  }

  async function getWeatherData() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const pointRes = await axios.get(
        `https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`,
        { withCredentials: false }
      );

      getHourlyForecast(pointRes);
      getDailyForecast(pointRes);
      const cityData = pointRes.data.properties.relativeLocation.properties;
      setCity(cityData.city + ", " + cityData.state);
      console.log("dailyWeatherData", dailyWeatherData);
      console.log("formatedData", formatedData);
    });
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather-master-container container">
      <div className="city-name">
        <h2>{city}</h2>
      </div>
      {weatherData?.periods && (
        <div className="weather-data-container">
          <WeatherChart data={formatedData} />
        </div>
      )}
      <div className="days-container d-flex flex-row">
        {dailyWeatherData.map((day, index) => {
          return <WeatherDailyCard key={index} day={day} />;
        })}
      </div>
    </div>
  );
}

export default Weather;
