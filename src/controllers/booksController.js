import Book from '../models/booksModel.js';

export const findAll = async (req, res, next) => {
  try {
    // code here
    res.json({});
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    // code here
    res.json({});
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const book = new Book(req.body);
    const result = await book.save();
    res.status(200).json(result);
  } catch (err) {
    if (['CastError', 'ValidationError'].includes(err?.name)) {
      next({
        message: err.message,
        stack: err.stack,
        statusCode: 400,
      });
    }
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    // code here
    res.json({});
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    // code here
    res.json({});
  } catch (err) {
    next(err);
  }
};
