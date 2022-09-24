import getenv from '../getenv.js';
import jwt from 'jsonwebtoken';

const TOKEN_SECRET = getenv('TOKEN_SECRET');

const generateAccessToken = (username) => {
  return jwt.sign(username, TOKEN_SECRET, { expiresIn: '7d' });
};

export default generateAccessToken;
