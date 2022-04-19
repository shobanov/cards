import { useQuery } from 'react-query';

import { api } from '../api';

export const useFetchCards = () => {
  const { data } = useQuery<any>(     // ?
    'card/list',
    api.fetchCards,
    {
      onError: (error: any ) => {
        alert(error.message);
      },
    }
  )

  return data?.cards;
};