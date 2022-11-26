import React from 'react';

import { FlexContainer, MainContainer, AsideContainer } from './styles';

import { Header } from '../../components/Header';
import { SeparateSection } from '../../components/Separate';
import { CardsSection } from '../../components/CardsSection';

function Main() {
  return (
    <FlexContainer>
      <MainContainer>
        <Header />
        <SeparateSection />
        <CardsSection />
      </MainContainer>
      <AsideContainer>
        <h1>aside</h1>
      </AsideContainer>
    </FlexContainer>
  );
}

export default Main;
