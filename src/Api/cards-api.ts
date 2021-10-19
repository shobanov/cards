/* eslint-disable @typescript-eslint/no-redeclare */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

// api
export const cardsAPI = {
  getCards() {
    return instance.get<Array<CardsType>>('deck');
  },
  removeCardFromCommonDeck() {
    return instance.delete<Array<CardsType>>('commonDeck')
  },
  addCardToLearnedDeck() {
    return instance.put<Array<CardsType>>('learnedDeck')
  },
  addCardToUnlearnedDeck() {
    return instance.put<Array<CardsType>>('unlearnedDeck')
  },
};

// types
export type CardsType = {
  id: number;
  topic: string;
  title: string;
  answer: string;
};

export type ResponseType = {
  resultCode: number;
};
