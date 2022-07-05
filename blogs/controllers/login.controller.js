import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/user.js';

export const validateLogin = async (req, res, next) => {
  const { username, password } = req.body;

  console.log(req.body);

  const user = await User.findOne({ username });

  console.log(user);

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!passwordCorrect || !user) {
    return res.status(401).json({ error: 'invalid username or password' });
  }

  const userToken = { username: user.username, id: user._id };

  const token = jwt.sign(userToken, process.env.SECRET, { expiresIn: 60 * 60 });

  res.status(200).send({ token, username: user.username, name: user.name });
};
