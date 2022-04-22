import React from 'react';
import { DeckControls } from './DeckControls';
import { DeckModal } from './DeckModal';
import { DeckContainer, DeckTitle } from './styles';

interface Iprops {
  title: string;
};

export const Deck: React.FC<Iprops> = ({ title }) => {
  return (
    <React.Fragment>
      <DeckModal children={undefined} />
      <DeckContainer>
        <DeckTitle>{title}</DeckTitle>
        <DeckControls />
      </DeckContainer>
    </React.Fragment>
  );
};