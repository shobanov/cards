import { CardType } from '../api/api';

const initialState: Array<CardType> = [];

export const cardsReducer = (state: Array<CardType> = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'FETCH_RANDOM_CARD': {
      return action.payload;
    }
    default:
      return state;
  }
};

// actions
export const fetchRandomCardAC = (cards: Array<CardType>) => ({ type: 'FETCH_RANDOM_CARD', payload: cards } as const);

// thunks
// export const fetchRandomCardTC = () => (dispatch: Dispatch) => {
//   api.getCards().then((res) => {
//     dispatch(fetchRandomCardAC(res.data));
//   });
// };

// types
export type InitialStateType = {};

export type ActionsType = GetRandomCardActionType;

export type GetRandomCardActionType = {
  type: 'FETCH_RANDOM_CARD';
  payload: Array<CardType>;
};
