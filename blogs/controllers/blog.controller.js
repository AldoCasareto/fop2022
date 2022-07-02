import { Blog } from '../models/blog.js';
import { User } from '../models/user.js';

export const getBlogs = async (req, res, next) => {
  try {
    const blog = await Blog.find({});
    return res.json(blog);
  } catch (error) {
    next(error);
  }
};

export const postBlog = async (req, res, next) => {
  const { userId, author, url, title, likes } = req.body;

  const user = await User.findById(userId);

  const blog = new Blog({
    author,
    url,
    title,
    likes,
    user: user._id,
  });

  try {
    const savedBlog = await blog.save();

    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    res.json(savedBlog);
  } catch (error) {
    next(error);
  }
};
