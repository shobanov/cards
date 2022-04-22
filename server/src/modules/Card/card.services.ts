import { prisma } from '../Prisma/prisma.service';

export async function fetchCards() {
    try {
      const cards = await prisma.card.findMany();

      return cards;
    }
      catch (e) {
        throw Error('fetchAllTopics request error description');
    };
};

export async function updateCardById(id, learned, viewed) {
  try {
    const cards = await prisma.card.update({
      where: { id },
      data: {
        learned,
        viewed 
      }
    });

    return cards;
  }
    catch (e) {
      throw Error('updateCardById request error');
  };
};