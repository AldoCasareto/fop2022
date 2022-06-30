import mongoose from 'mongoose';
import express from 'express';
import * as config from './utils/config.js';
import * as logger from './utils/logger.js';
import * as middleware from './utils/middleware.js';
import cors from 'cors';
import { blogRouter } from './routes/blogs.routes.js';

const app = express();

const connectDb = async () => {
  try {
    await mongoose.connect(config.MONGODB_URL, {});
    // logger.info('connected to mongo', config.MONGODB_URL);
  } catch (error) {
    logger.error(error);
  }
};
connectDb();

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);

export default app;
