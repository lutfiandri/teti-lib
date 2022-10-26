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

export const httpException = (statusCode, message) => {
  return {
    statusCode: statusCode,
    message: message,
  };
};
