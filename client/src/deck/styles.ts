import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DeckContainer = styled.div`
  max-width: 200px;
  min-width: 200px;
  min-height: 350px;
  width: 30%;
  border-radius: 15px;
  background-color: dimgray;
  border: 2px solid;
`;

export const LinkRouterDom = styled(Link)`
  text-decoration: none;
  color: #000 !important;
`;

export const DeckTitle = styled.h2`
  text-align: center;
`;
