require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
// Защита сервера
const helmet = require('helmet');
const limiter = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const errorsHandler = require('./errors/errorsHandler');

const mainRouter = require('./routes/index');

const app = express();
app.use(helmet());
app.use(cors());

const { PORT = 3000, DB_ADRESS, NODE_ENV } = process.env;

// подключаемся к серверу mongo
mongoose.connect(NODE_ENV === 'production' ? DB_ADRESS : 'mongodb://127.0.0.1:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.use(requestLogger);
app.use(limiter);
app.use(express.json()); // для собирания JSON-формата
app.use(express.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса

app.use('/', mainRouter);

app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(PORT));
