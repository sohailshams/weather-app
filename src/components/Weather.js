import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'Glasgow,uk',
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
    <div>
      <h2>{weatherInfo?.name}</h2>
      <h2>
        {weatherInfo?.weather[0].main}, {weatherInfo?.weather[0].description}
      </h2>
    </div>
  );
}

export default Weather;
