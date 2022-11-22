import React from 'react';

import { FlexContainer, MainContainer, AsideContainer } from './styles';

import { Header } from '../../components/Header';

function Main() {
  return (
    <FlexContainer>
      <MainContainer>
        <Header />
      </MainContainer>
      <AsideContainer>
        <h1>aside</h1>
      </AsideContainer>
    </FlexContainer>
  );
}

export default Main;
