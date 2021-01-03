import express from 'express';
import getGenres from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res,next) => {
<<<<<<< HEAD
  getGenres().then(movies => res.status(200).send(movies))
=======
  getGenres().then(genres => res.status(200).send(genres))
>>>>>>> 75d34e9c79dc1ff46fbb8770b09dcf8a96eaa74e
  .catch((error) => next(error));
});


export default router;