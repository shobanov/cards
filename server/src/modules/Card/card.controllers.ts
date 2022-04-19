const CardService = require ('./card.services');
// use hooks?
export async function fetchCards(_req, res) {
    try {
      const cards = await CardService.fetchCards();

      return res.status(200).json({
        cards,
      });
    }
    catch ({ message }) {
      return res.status(400).json({
        message,
      });
    };
};

export async function updateCardById(req, res) {
  const { id, learned, viewed } = req.body;
  try {
    const cards = await CardService.updateCardById(id, learned, viewed);

    return res.status(200).json({
      cards
    });
  }
  catch ({ message }) {
    return res.status(400).json({
      message,
    });
  };
};