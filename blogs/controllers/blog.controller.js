import jwt from 'jsonwebtoken';
import { Blog } from '../models/blog.js';
import { User } from '../models/user.js';

const getToken = (req) => {
  const auth = req.get('authorization');

  if (auth && auth.toLowerCase().startsWith(`bearer `)) {
    return auth.substring(7);
  }
  return null;
};

export const getBlogs = async (req, res, next) => {
  try {
    const blog = await Blog.find({}).populate('user', {
      username: 1,
      name: 1,
    });
    return res.json(blog);
  } catch (error) {
    next(error);
  }
};

export const postBlog = async (req, res, next) => {
  const { userId, author, url, title, likes } = req.body;

  console.log(req.body);

  const token = getToken(req);

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }

  const user = await User.findById(decodedToken.id);

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
