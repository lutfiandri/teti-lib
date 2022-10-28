export const httpNotFound = (message = 'Not found') => {
  return {
    statusCode: 404,
    message: message,
  };
};

export const httpBadRequest = (message = 'Bad request') => {
  return {
    statusCode: 400,
    message: message,
  };
};

export const httpUnauthorized = (message = 'Unauthorized') => {
  return {
    statusCode: 401,
    message: message,
  };
};

export const httpForbidden = (message = 'Forbidden') => {
  return {
    statusCode: 403,
    message: message,
  };
};

export const httpException = (statusCode, message) => {
  return {
    statusCode: statusCode,
    message: message,
  };
};
