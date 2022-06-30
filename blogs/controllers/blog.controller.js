import { Blog } from '../models/blog.js';

export const getBlogs = async (req, res, next) => {
  try {
    const blog = await Blog.find({});
    return res.json(blog);
  } catch (error) {
    next(error);
  }
};

export const postBlog = async (req, res, next) => {
  console.log(`req.body = `, req.body);
  const blog = new Blog(req.body);

  try {
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
};
