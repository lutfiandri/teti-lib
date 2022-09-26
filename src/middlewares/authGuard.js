import jwt from 'jsonwebtoken';
import getenv from '../helpers/getenv.js';

const TOKEN_SECRET = getenv('TOKEN_SECRET');

const authGuard = (req, res, next) => {
  console.log('\n\n\nauth guard');
  console.log(req);
  console.log('\n\n\n');
  const authHeader = req.headers['authorization'];

  const authType = authHeader && authHeader.split(' ')[0];
  const token = authHeader && authHeader.split(' ')[1];

  if (authType !== 'Bearer' || token == null) return res.sendStatus(401);

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

export default authGuard;
