import generateAccessToken from '../helpers/auth/generateAccessToken.js';

export const signup = (req, res, next) => {
  console.log(req.body);
  const token = generateAccessToken({ username: req.body.username });
  res.json(token);
};
