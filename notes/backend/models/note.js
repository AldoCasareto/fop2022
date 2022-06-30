import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  content: String,
  date: String,
  important: Boolean,
});

export const Note = mongoose.model('Note', noteSchema);
