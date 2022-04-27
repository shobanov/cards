import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

export const api = Object.freeze({
  async updateCard(newValues: UpdateCardType) {
    const { id, learned, viewed } = newValues;
    const response = await instance.put(`card/${id}`, {id, learned, viewed});
    return response.data;

  },
  async fetchCards() {
    const response = await instance.get('card/list');

    return response.data;
  },
});

// types

export type CardType = {
  id: number;
  topic: TopicList;
  topicId: number;
  title: string;
  description: string;
  learned: boolean;
  viewed: boolean;
};

export type UpdateCardType = {
  id: number;
  learned: boolean;
  viewed: boolean;
};

export type TopicType = {
  id: number;
  topic: TopicList;
};

export type TopicList = 'HTML' | 'CSS' | 'JS';

export type ResponseType = {
  cards: CardType[];
};