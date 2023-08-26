require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const mainRouter = require('./routes/index');

const app = express();

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

// подключаемся к серверу mongo
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.use('/', mainRouter);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(PORT));
