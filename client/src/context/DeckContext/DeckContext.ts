import React from 'react';

interface DeckContextData {
  chosenDeck: string;
  setChosenDeck: React.Dispatch<React.SetStateAction<string>>
};

export const DeckContext = React.createContext<DeckContextData | any>('');