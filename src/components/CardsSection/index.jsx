import React from 'react';
import { BsThermometerSun, BsWind, BsCloudRain, BsWater } from 'react-icons/bs';
import { InfoCard } from '../InfoCard';
import { FlexContainer } from './styles';

export const CardsSection = () => {
  console.log('test');
  return (
    <FlexContainer>
      <InfoCard
        title="wind speed"
        cardValue="12KM/h"
        cardIcon={<BsThermometerSun />}
      />
      <InfoCard title="wind speed" cardValue="12KM/h" cardIcon={<BsWind />} />
      <InfoCard
        title="wind speed"
        cardValue="12KM/h"
        cardIcon={<BsCloudRain />}
      />
      <InfoCard title="wind speed" cardValue="12KM/h" cardIcon={<BsWater />} />
    </FlexContainer>
  );
};
