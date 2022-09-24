import jwt from 'jsonwebtoken';
import getenv from '../helpers/getenv.js';

const TOKEN_SECRET = getenv('TOKEN_SECRET');

const authGuard = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

export default authGuard;
