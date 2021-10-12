import { Dispatch } from 'redux';
import { cardsAPI, CardsType } from '../Api/cards-api';

const initialState: Array<CardsType> = [];

export const cardsReducer = (state: Array<CardsType> = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'FETCH_RANDOM_CARD': {
      const items = Object.values(action.payload).flat();
      const randomItem = items[(Math.random() * items.length) | 0];
      return [randomItem];
    }
    default:
      return state;
  }
};

// actions
export const fetchRandomCardAC = (cards: Array<CardsType>) => ({ type: 'FETCH_RANDOM_CARD', payload: cards } as const);

// thunks
export const fetchRandomCardTC = () => (dispatch: Dispatch) => {
  cardsAPI.getCards().then((res) => {
    dispatch(fetchRandomCardAC(res.data));
  });
};

// types
export type InitialStateType = {};

export type ActionsType = GetRandomCardActionType;

export type GetRandomCardActionType = {
  type: 'FETCH_RANDOM_CARD';
  payload: Array<CardsType>;
};
