// import axios from "axios";
import React, { useEffect } from "react";
// import CurrentDataCard from "../Dashboard/CurrentDataCard";
import "./Weather.css";

function Weather() {
  // const [weatherData, setWeatherData] = useState();
  // const [position, setPosition] = useState({ lat: "", long: "" });

  // async function getWeatherData() {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     console.log(position.coords);
  //     const weatherRes = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=10&units=metric&appid=75f6d8083154de3b29374751928aea12`,
  //       { withCredentials: false }
  //     );
  //     console.log(weatherRes.data);
  //     setWeatherData(weatherRes.data);
  //   });
  // }

  useEffect(() => {
    // getWeatherData();
  }, []);

  return (
    <div className="weather-master-container">
      <div className="city-name">
        <h2>Weather</h2>
      </div>
      {/* {weatherData?.list && ( */}
      {/* <div className="weather-data-container">
          <CurrentDataCard
            dtype="Temperature"
            data={weatherData.list[0].main.temp}
          />

          <CurrentDataCard
            dtype="Humidity"
            data={weatherData.list[0].main.humidity}
          />
          
        <CurrentDataCard
          dtype="Temperature"
          data={weatherData.list[0].main.temp}
        />
        <CurrentDataCard
          dtype="Temperature"
          data={weatherData.list[0].main.temp}
        /> 
        </div> */}
      {/* )} */}
    </div>
  );
}

export default Weather;
