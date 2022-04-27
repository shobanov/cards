import React from 'react';
import { useParams } from 'react-router-dom';

import { DeckControls } from './DeckControls';
import { DeckModal } from './DeckModal';
import { DeckContainer, DeckTitle, LinkRouterDom } from './styles';

interface Iprops {
  title: string;
};

export const Deck: React.FC<Iprops> = ({ title }) => {
  const { deck } = useParams();
  const isSelected = deck === title;

  return (
    <React.Fragment>
      <DeckModal />
      <LinkRouterDom to={"/" + title}>
        <DeckContainer>
          <DeckTitle>{title}</DeckTitle>
          <DeckControls isSelected={isSelected} />
        </DeckContainer>
      </LinkRouterDom>
    </React.Fragment>
  );
};