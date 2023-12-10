import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSearch() {
    let apiKey = "87a3a2150aa49253a7b9c970848257a6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then(showTempInfo)
      .catch((error) => console.log(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  function showTempInfo(response) {
    // console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              value={city}
              onChange={updateCity}
            />
            <input type="submit" value="search" />
          </form>
        </div>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    handleSearch();
    return "Loading...";
  }
}
