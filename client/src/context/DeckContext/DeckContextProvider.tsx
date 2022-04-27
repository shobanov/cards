import { useState } from 'react';

import { DeckContext } from './DeckContext';

interface IProps {
  children: React.ReactNode;
};
 
export const DeckContextProvider: React.FC<IProps> = ({ children }) => {
  const [chosenDeck, setChosenDeck] = useState('');

  return (
    <DeckContext.Provider value={{ chosenDeck, setChosenDeck }}>
      {children}
    </DeckContext.Provider>
  );
};