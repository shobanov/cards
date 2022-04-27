import { useMutation } from 'react-query';

import { api } from '../api';
import { CardType, UpdateCardType } from '../api/api';

export const useUpdateCard = () => {
  const mutation = useMutation((newValue: UpdateCardType): Promise<CardType> => {
    return api.updateCard(newValue)
  })
  return mutation;
};


