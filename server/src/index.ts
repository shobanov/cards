const express = require('express');
const cors = require('cors');

const topicRoutes = require('./modules/Topic/topic.routes');
const cardRoutes = require('./modules/Card/card.routes');

const PORT = 5000;

export const app = express();

app.use(cors())
app.use(express.json());
app.use('/', cardRoutes);
app.use('/', topicRoutes);

app.listen({port: PORT}, () => {
  console.log('SERVER RUNNING ON PORT ' + PORT);
});
