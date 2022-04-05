import { prisma } from "../Prisma/prisma.service";

export async function fetchTopics() {
    try {
      const topics = await prisma.topic.findMany();

      return topics;
    } catch (e) {
        throw Error('fetchAllTopics request error description');
    };
};