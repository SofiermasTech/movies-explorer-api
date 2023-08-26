const mainRouter = require('express').Router();
const auth = require('../middlewares/auth');

const {
  validationSignup, validationSignin,
} = require('../utils/validation');
const { registerUser, login } = require('../controllers/users');

const NotFoundError = require('../errors/NotFoundError');

mainRouter.post('/signup', validationSignup, registerUser);
mainRouter.post('/signin', validationSignin, login);

// авторизация
mainRouter.use(auth);

// роуты, которым авторизация нужна
mainRouter.use('/users', require('./users'));
mainRouter.use('/movies', require('./movies'));

mainRouter.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемая страница не найдена'));
});

module.exports = mainRouter;
