import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");

  function showtemp(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWindSpeed(Math.round(response.data.wind.speed));
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSearch() {
    event.preventDefault();
    let apiKey = "87a3a2150aa49253a7b9c970848257a6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showtemp);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a city"
          value={city}
          onChange={updateCity}
        />
        <input type="submit" value="search" />
      </form>
      <ul>
        {city ? (
          <>
            <li> Temperature : {temperature}°C</li>
            <li> Description : {description} </li>
            <li> Humidity : {humidity}% </li>
            <li> WindSpeed: {windSpeed}km/h</li>
          </>
        ) : (
          "Please Enter a city!"
        )}
      </ul>
    </div>
  );
}
