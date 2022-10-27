import { errorResponseBuilder } from '../helpers/responseBuilder.js';

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json(errorResponseBuilder(err));

  return;
};

export default errorHandler;
