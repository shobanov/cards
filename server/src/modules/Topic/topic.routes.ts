import express = require('express');
const topicController = require('./topic.controllers');

const router = express.Router();

router.get('/topic/list', topicController.fetchTopics);

module.exports = router;