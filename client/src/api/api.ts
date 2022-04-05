import axios from 'axios';

const API_URL = process.env.CARDS_API_URL;

const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

export const api = Object.freeze({
  async fetchTopicList() {
    const response = await axios.get(`${API_URL}/topics`);

    await wait(1000);

    return response.data;
  },
  async fetchCardList(topicId: number) {
    const response = await axios.get(`${API_URL}/topics${topicId}`);

    await wait(1000);

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

export type TopicType = {
  id: number;
  topic: TopicList;
};

export type TopicList = 'HTML' | 'CSS' | 'JS';

export type ResponseType = {
  resultCode: number;
};