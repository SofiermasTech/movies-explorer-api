const userRouter = require('express').Router();

const {
  // validationUserId,
  validationUserUpdate,
} = require('../utils/validation');

const {
  updateUser,
  getProfile,
} = require('../controllers/users');

// userRouter.get('/', getUsers);
userRouter.get('/me', getProfile);
// userRouter.get('/movies', validationUserId, getUserById);
userRouter.patch('/me', validationUserUpdate, updateUser);

module.exports = userRouter;
