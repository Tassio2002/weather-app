import axios from 'axios';

// Pesquisar formas melhores de usar o axios

export const getGeolocationData = () => {
  axios
    .get(
      'http://api.positionstack.com/v1/forward?access_key=139ec746270ec6a28bc2ca191ff1d4cd&query=Lauro%20de%20Freitas'
    )
    .then((response) => {
      // verificar se os dados foram recebidos ou retornaram undefined
      const data = response.data.data[0];
      const locationData = {
        latitude: data.latitude,
        longitude: data.longitude,
        region: data.region,
        locality: data.locality,
        country: data.country,
      };
      console.log(locationData);
    });
};

export const getWeatherData = () => {
  axios
    .get(
      'https://api.open-meteo.com/v1/forecast?latitude=5.499998&longitude=-76.5333312&hourly=temperature_2m,apparent_temperature,precipitation,rain,visibility,windspeed_10m,relativehumidity_2m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto'
    )
    .then((response) => {
      // hourly data
      // tentar colocar precipitation depois
      const Date = response.data.hourly.time;
      const realTemperatures = response.data.hourly.temperature_2m;
      const apparentTemperature = response.data.hourly.apparent_temperature;
      const windSpeed = response.data.hourly.apparent_temperature;
      const relativeHumidity = response.data.hourly.relativehumidity_2m;
      const windDirection = response.data.hourly.winddirection_10m;
      // daily data
      const minTemperature = response.data.daily.temperature_2m_min;
      const maxTemperature = response.data.daily.temperature_2m_max;
      const hourly = [12, 36, 60, 84, 108, 132, 156];
      const hourlyResponse = [];
      console.log(response.data);
      hourly.forEach((temperature) => {
        hourlyResponse.push({
          Date: Date[temperature],
          real_temperature: realTemperatures[temperature],
          apparent_temperature: apparentTemperature[temperature],
          wind_speed: windSpeed[temperature],
          relative_humidity: relativeHumidity[temperature],
          wind_direction: windDirection[temperature],
        });
      });
      const dailyTime = response.data.daily.time;
      const dailyResponse = [];
      for (let index = 0; index < dailyTime.length; index += 1) {
        dailyResponse.push({
          min_temperature: minTemperature,
          max_temperature: maxTemperature,
        });
      }
      const weatherData = {
        daily: dailyResponse,
        hourly: hourlyResponse,
      };
      return weatherData;
    });
};
