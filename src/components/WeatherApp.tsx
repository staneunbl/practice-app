import React, { useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const apiKey = "ca20f84cf49e519100d9e1f48e7963eb";

  const fetchWeatherData = async () => {
    if (!city) return;
    setLoading(true);  
    setError('');

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      ); // Process the data here
      if (response.data.cod === 200) { 
        setWeatherData(response.data); 
      } else {
        setError(response.data.message);
        setWeatherData(null);
      } 
    }  
    catch (err) { // used for handling errors // This block runs if an error occurs
      setError("Something went wrong! Please try again later.");
      setWeatherData(null);
    } finally {  // This block always runs, regardless of success or failure
      setLoading(false);
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // an event handler that triggers when there is any change in the input field.
    setCity(event.target.value);
  };

  const handleCitySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={handleCitySubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
      </form>
      <button>Get Weather</button>

      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && !loading && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {String(weatherData.main.temp).toUpperCase()}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </div>
      )}

      {/* Display error message */}
    </div>
  );
}

export default WeatherApp;
