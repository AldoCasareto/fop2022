import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log('connected to mongo');
  } catch (error) {
    console.error(error);
  }
};
connectDb();

const noteSchema = new mongoose.Schema({
  content: String,
  date: String,
  important: Boolean,
});

export const Note = mongoose.model('Note', noteSchema);
