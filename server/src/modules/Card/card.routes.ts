import express = require('express');
const cardController = require('./card.controllers');

const router = express.Router();

router.get('/card/randomTopic');
router.get('/card/topicId/:id');
router.get('/card/learned');
router.get('/card/unlearned');

router.put('/card/randomTopic/topicId/:id/cardId/:id');
router.put('/card/learned/topicId/:id/cardId/:id');
router.put('/card/unlearned/topicId/:id/cardId/:id');

module.exports = router;