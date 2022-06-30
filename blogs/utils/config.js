import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;

export const MONGODB_URL =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URL
    : process.env.MONGO_URL;
