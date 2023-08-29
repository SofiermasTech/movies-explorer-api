const userRouter = require('express').Router();

const {
  validationUserUpdate,
} = require('../utils/validation');

const {
  updateUser,
  getProfile,
} = require('../controllers/users');

userRouter.get('/me', getProfile);
userRouter.patch('/me', validationUserUpdate, updateUser);

module.exports = userRouter;
