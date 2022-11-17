import React from 'react';

import { Container } from './styles';
import { getGeolocationData, getWeatherData } from '../../services/api';

function Main() {
  return (
    <Container>
      <h1>Weather info</h1>
      <button type="button" onClick={getGeolocationData}>
        Pegar geolocalização
      </button>
      <button type="button" onClick={getWeatherData}>
        Pegar Previsção do tempo
      </button>
    </Container>
  );
}

export default Main;
