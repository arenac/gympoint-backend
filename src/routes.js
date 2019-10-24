import { Router } from 'express';

import SessionController from './app/controllers/SessionControlle';
import StudentController from './app/controllers/StudentController';

import authMiddleware from './app/midlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/students', StudentController.store);

export default routes;
