import mongoose from 'mongoose';
import Book from '../models/booksModel.js';

export const findAll = async (req, res, next) => {
  try {
    const book = await Book.find({});

    res.json(book);
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const response = await Book.findById({ _id: id }).exec();
    res.json({ response });
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const book = new Book(req.body);
    const result = await book.save();
    res.status(201).json(result);
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
    const id = mongoose.Types.ObjectId(req.params.id);

    const response = await Book.updateOne({ _id: id }, req.body);
    res.json({ response });
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    // code here
    const id = mongoose.Types.ObjectId(req.params.id);

    const response = await Book.deleteOne({ _id: id });
    res.json({ response });
  } catch (err) {
    next(err);
  }
};
