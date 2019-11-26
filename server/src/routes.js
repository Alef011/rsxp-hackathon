import { Router } from 'express';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';

import ContentController from './app/controllers/ContentController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/contents', ContentController.store);
routes.put('/contents', ContentController.update);

export default routes;
