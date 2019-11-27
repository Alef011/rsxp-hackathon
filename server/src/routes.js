import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ContentController from './app/controllers/ContentController';
import AwardController from './app/controllers/AwardController';
import ChallengeController from './app/controllers/ChallengeController';
import AchievementController from './app/controllers/AchievementController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/files', upload.single('file', FileController.store));

// routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/contents', ContentController.index);
routes.post('/contents', ContentController.store);
routes.put('/contents', ContentController.update);

routes.get('/awards', AwardController.index);
routes.post('/awards', AwardController.store);
routes.put('/awards', AwardController.update);

routes.get('/challenges', ChallengeController.index);
routes.post('/challenges', ChallengeController.store);
routes.put('/challenges', ChallengeController.update);

routes.get('/achievements', AchievementController.index);
routes.post('/achievements', AchievementController.store);
routes.put('/achievements', AchievementController.update);

export default routes;
