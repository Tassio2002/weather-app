import styled from 'styled-components';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const text = (props) => props.theme.colors.text;
const link = (props) => props.theme.colors.link;

export const SeparateContainer = styled.section`
  width: 90%;
  padding: 1.5em 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const SeparateTitle = styled.h3`
  font-size: 16px;
  color: ${text};
`;

export const MoreDetailsBox = styled.div`
  display: flex;
`;

export const MoreDetails = styled.p`
  font-size: 14px;
  margin-right: 1em;
  color: ${link};
`;

export const SearchIcon = styled(BsBoxArrowUpRight)`
  font-size: 14px;
  color: ${link};
`;
