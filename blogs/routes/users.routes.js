import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller.js';

export const userRouter = Router();

userRouter.get('/', userCtrl.getUsers);

userRouter.post('/', userCtrl.createUser);
