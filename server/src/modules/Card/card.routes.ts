import express = require('express');
const cardController = require('./card.controllers');

const router = express.Router();
router.get('/card/list', cardController.fetchCards);
router.put('/card/:id', cardController.updateCardById);

module.exports = router;