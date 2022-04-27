import { SetStateAction, useEffect, useState } from 'react';

import { CardType } from '../api/api';
import { useFetchCards } from './useFetchCards';

type setStateCardsType = SetStateAction<undefined | CardType[]>;

export const useFilterCards = () => {
  const fetchCardsQ = useFetchCards();
  const learned = fetchCardsQ?.filter(card => card.learned);
  const unlerned = fetchCardsQ?.filter(card => !card.learned);
  
  return {
    learned,
    unlerned
  };
};