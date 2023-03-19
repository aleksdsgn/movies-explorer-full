import { Router } from 'express';
import {
  celebrateBodyAuth,
  celebrateBodyUser,
} from '../validators/users.js';
import { router as userRouter } from './users.js';
import { router as movieRouter } from './movies.js';
import { login, register } from '../controllers/users.js';
import { auth } from '../middlewares/auth.js';
import { NotFoundError } from '../errors/NotFoundError.js';
import { errorMessages } from '../errors/messages.js';

export const router = Router();

// Краш-тест сервера
router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(errorMessages.serverCrash);
  }, 0);
});

// роуты, не требующие авторизации
router.post('/signin', celebrateBodyAuth, login);
router.post('/signup', celebrateBodyUser, register);

// роуты, которым авторизация нужна
router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

// обработка неправильного пути
router.use('*', auth, (req, res, next) => {
  next(new NotFoundError(errorMessages.routeNotFound));
});
