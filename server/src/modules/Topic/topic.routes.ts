import express = require('express');
const topicController = require('./topic.controllers');

const router = express.Router();

router.get('/topic/list', topicController.fetchTopics);

// '/topic/2(JS)/learned/count'
// '/topic/2(JS)/learned/list'

module.exports = router;