import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import ContentController from './app/controllers/ContentController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);
// criar requisição no insomia ou outro programa que for, com token ou não
routes.post('/files', upload.single('file', FileController.store);

// routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/contents', ContentController.store);
routes.put('/contents', ContentController.update);

export default routes;
