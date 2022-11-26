import React from 'react';

import {
  SeparateContainer,
  SeparateTitle,
  MoreDetailsBox,
  MoreDetails,
  SearchIcon,
} from './styles';

export const SeparateSection = () => {
  function openMoreDetails () {
    console.log(1)
  }
  return (
    <SeparateContainer onClick={openMoreDetails()}>
      <SeparateTitle>Today overview</SeparateTitle>
      <MoreDetailsBox>
        <MoreDetails>More details</MoreDetails>
        <SearchIcon />
      </MoreDetailsBox>
    </SeparateContainer>
  );
};
