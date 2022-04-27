import { useQuery } from 'react-query';

import { api } from '../api';
import { ResponseType } from '../api/api';

export const useFetchCardsQuery = () => {
  const { data } = useQuery<ResponseType, Error>(
    'card/list',
    api.fetchCards,
    {
      onError: (error) => {
        alert(error.message);
      },
    }
  )

  return data?.cards;
};