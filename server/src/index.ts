const express = require('express');
const cors = require('cors');

// const topicRoutes = require('./modules/Topic/topic.routes');
const cardRoutes = require('./modules/Card/card.routes');

const PORT = 5000;

export const app = express();

app.use(cors())
app.use(express.json());
app.use('/', cardRoutes);
// app.use('/', topicRoutes);

app.listen({port: PORT}, () => {
  console.log('SERVER RUNNING ON PORT ' + PORT);
});














/*
Задачи:
2. Создать фильтрацию по просмотреным и выученным
3. Создать фильтрацию по непросмотренным и невыученным
4. Создать фильтрацию по просмотренным и невыученным
5. Создать апдейт на выученные
6. Создать апдейт на просмотренные
7. Создать счётчики на каждую колоду
8. Создать фильтрацию по топикам на каждую колоду
*/