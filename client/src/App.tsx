import React from 'react';

import { Root } from './Root';
import { Deck } from './deck';
import { useFetchCards, useFilterCards, useUpdateCard } from './hooks';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';

const Decks = () => {
  // const useUpdateCardM = useUpdateCard()
  // const fetchCardsQ = useFetchCards();

  // const x = fetchCardsQ?.includes(learned: true)
  // console.log(fetchCardsQ)

  // const newArray = fetchCardsQ?.filter(el => {
  //   el. = 1000 && el.sqft = 500;
  // });

  const { cardsForLearnedDeck, cardsForUnlearnedDeck } = useFilterCards();

  console.log(cardsForLearnedDeck, cardsForUnlearnedDeck)


  return (
    <>
      <Deck title="Learned" />
      <Deck title="Common" />
      <Deck title="Unlearned" />
    </>
  )
};

export const App: React.FC = () => {
  
  return (
    <Root>
      <Routes>
        <Route path="/:deck" element={<Decks />} />
        <Route path="/" element={<Decks />} />
      </Routes>
    </Root>
  );
};

 
          
// const cardReact = () => {
//   const deckReact = state.themes.react
//   const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
// }

// DeckControlsQuery.ts
// DeckControlsCreateMutation.ts