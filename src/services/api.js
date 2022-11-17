import axios from 'axios';

// Pesquisar formas melhores de usar o axios

export const getGeolocationData = () => {
  axios
    .get(
      'http://api.positionstack.com/v1/forward?access_key=139ec746270ec6a28bc2ca191ff1d4cd&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC'
    )
    .then((response) => {
      console.log(response.data);
    });
};

export const getWeatherData = () => {
  axios
    .get(
      'https://api.open-meteo.com/v1/forecast?latitude=-12.89&longitude=-38.33&hourly=temperature_2m'
    )
    .then((response) => {
      console.log(response.data);
    });
};


