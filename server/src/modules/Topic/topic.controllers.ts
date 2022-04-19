const TopicService = require ('./topic.services');

export async function fetchTopics(_req, res) {
    try {
      const topics = await TopicService.fetchTopics()

      return res.status(200).json({
        topics,
      });
    }
    catch ({ message }) {
      return res.status(400).json({
        message,
      });
    };
};