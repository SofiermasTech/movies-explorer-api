const movieRouter = require('express').Router();

const {
  validationMovieId,
  validationAddMovie,
} = require('../utils/validation');

const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', validationAddMovie, addMovie);
movieRouter.delete('/:movieId', validationMovieId, deleteMovie);

module.exports = movieRouter;
