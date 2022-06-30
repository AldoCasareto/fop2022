import { notesRouter } from './controllers/notes.js';
import * as logger from './utils/logger.js';
import * as config from './utils/config.js';
import * as middleware from './utils/middleware.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

logger.info('connecting to', config.MONGO_URL);

const connectDb = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {});
    logger.info(`connected to mongo ${config.MONGO_URL}`);
  } catch (error) {
    logger.error(error);
  }
};
connectDb();

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
