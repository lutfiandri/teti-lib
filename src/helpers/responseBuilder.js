export const successResponseBuilder = (data) => {
  return {
    success: true,
    data: data,
  };
};

export const errorResponseBuilder = (error) => {
  return {
    success: false,
    error: error.message,
  };
};
