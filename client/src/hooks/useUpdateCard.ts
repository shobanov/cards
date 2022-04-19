import { useMutation, useQueryClient } from 'react-query';

import { api } from '../api';
import { UpdateCardType } from '../api/api';

export const useUpdateCard = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((newValues: UpdateCardType) => api.updateCard(newValues), {
    async onMutate(newValues) {
      const cacheKey = ['cards', newValues.id];
      const previousValue = await queryClient.getQueryData(cacheKey);
      await queryClient.setQueryData(cacheKey, ({oldValues}) => ({
        ...oldValues,
        ...newValues,
      }));

      return { previousValue }
    },
    onError: (previousValue: UpdateCardType) => {
      queryClient.setQueryData('todos', previousValue)
    },
    onSettled: () => {
      queryClient.invalidateQueries('cards')
    },
  })

  return mutation
};

