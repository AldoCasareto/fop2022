import { Router } from 'express';
import * as blogCtrl from '../controllers/blog.controller.js';

export const blogRouter = Router();

blogRouter.get('/', blogCtrl.getBlogs).post('/', blogCtrl.postBlog);
