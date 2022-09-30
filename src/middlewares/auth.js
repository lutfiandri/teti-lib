import jwt from 'jsonwebtoken';
import getenv from '../helpers/getenv.js';

const TOKEN_SECRET = getenv('TOKEN_SECRET');

export const authenticate = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);

    req.user = user;
    next();
  });
};

export const authorizeUser = (req, res, next) => {
  if (!req.user.isAdmin) {
    next();
  } else {
    return res.sendStatus(403);
  }
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    return res.sendStatus(403);
  }
};
