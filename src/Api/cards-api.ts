/* eslint-disable @typescript-eslint/no-redeclare */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/cards/',
});

// api
export const cardsAPI = {
  getCards() {
    return instance.get<Array<CardsType>>('');
  },
};

// types
export type CardsType = {
  id: number;
  topic: string;
  title: string;
  body: string;
};

export type ResponseType = {
  resultCode: number;
};
