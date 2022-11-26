import React from 'react';
import PropTypes from 'prop-types';

import {
  CardContainer,
  CardInfo,
  CardTitle,
  CardValue,
  CardIcon,
} from './styles';

export const InfoCard = (props) => {
  const { title, cardValue, cardIcon } = props;
  return (
    <CardContainer>
      <CardIcon>{cardIcon}</CardIcon>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardValue>{cardValue}</CardValue>
      </CardInfo>
    </CardContainer>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  cardValue: PropTypes.string.isRequired,
  cardIcon: PropTypes.element.isRequired,
};
