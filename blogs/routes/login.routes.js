import { Router } from 'express';
import * as loginCrtl from '../controllers/login.controller.js';

export const loginRouter = Router();

loginRouter.post('/', loginCrtl.validateLogin);
