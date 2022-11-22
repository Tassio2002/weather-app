import styled from 'styled-components';

const textSecondary = (props) => props.theme.colors.textSecondary;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const DateContainer = styled.div`
  width: 30%;
`;

export const CurrentMonth = styled.h2`
  font-size: 20px;
`;

export const FullDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${textSecondary};
`;
