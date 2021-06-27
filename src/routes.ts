import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const createTagController = new CreateTagController();
const createUserController = new CreateUserController();

router.post('/login', authenticateUserController.handle);
router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/compliments', createComplimentController.handle);

export { router };
