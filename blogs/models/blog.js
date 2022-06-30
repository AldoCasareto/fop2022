import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

export const Blog = mongoose.model('Blog', BlogSchema);
