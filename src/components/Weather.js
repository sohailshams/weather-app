import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weather.css';

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London',
    units: 'metric',
  },
  headers: {
    'x-rapidapi-key': '295976c5cdmshb8ba8766cdfd4ecp1af5bdjsn0dafd23a407e',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  },
};
function Weather() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setWeatherInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(weatherInfo);
  return (
    <div className="weather">
      <h2 className="weather__heading">{weatherInfo?.name}</h2>
      <h2 className="weather__temp">{weatherInfo?.main.temp}</h2>
      <h2 className="weather__heading">{weatherInfo?.weather[0].main}</h2>
    </div>
  );
}

export default Weather;
