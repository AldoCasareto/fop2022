import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { username, password, name } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    next(error);
  }
};
