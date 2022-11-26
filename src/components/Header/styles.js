import styled from 'styled-components';
import { RiSearch2Line } from 'react-icons/ri';

const textSecondary = (props) => props.theme.colors.textSecondary;
const boxColor = (props) => props.theme.colors.boxColor;
const lightText = (props) => props.theme.colors.lightText;

export const HeaderContainer = styled.div`
  width: 90%;
  padding: 1.5em 0;
  margin: 0 auto;
  border-bottom: 2px ${boxColor} solid;
  display: flex;
  justify-content: space-between;
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

export const SearchContainer = styled.div`
  width: 50%;
`;

export const SearchBox = styled.div`
  width: 100%;
  padding: 0.5em;
  border-radius: 0.3em;
  display: flex;
  align-items: center;
  background: ${boxColor};
`;

export const SearchIcon = styled(RiSearch2Line)`
  color: ${lightText};
`;

export const SearchBar = styled.input.attrs({
  type: 'search',
  placeholder: 'Search location here...',
})`
  width: 80%;
  border: none;
  margin-left: 0.4em;
  background: ${boxColor};
`;
