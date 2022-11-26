import styled from 'styled-components';

const text = (props) => props.theme.colors.text;
const textSecondary = (props) => props.theme.colors.textSecondary;
const boxColor = (props) => props.theme.colors.boxColor;
const link = (props) => props.theme.colors.link;

export const CardContainer = styled.div`
  width: 48%;
  min-width: 400px;
  padding: 1em 0.3em;
  margin: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${boxColor};
`;

export const CardIcon = styled.div`
  width: 25%;
  font-size: 30px;
  color: ${link};
`;

export const CardInfo = styled.div`
  padding: 0.3em;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${textSecondary};
`;

export const CardValue = styled.h2`
  color: ${text};
`;
