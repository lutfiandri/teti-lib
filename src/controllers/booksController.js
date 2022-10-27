import mongoose from 'mongoose';
import {
  httpBadRequest,
  httpNotFound,
} from '../helpers/httpExceptionBuilder.js';
import { successResponseBuilder } from '../helpers/responseBuilder.js';
import Book from '../models/booksModel.js';

export const findAll = async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.json(successResponseBuilder({ books: books }));
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const book = await Book.findById({ _id: id }).exec();
    if (!book) throw httpNotFound();
    res.json(successResponseBuilder({ book: book }));
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const book = new Book(req.body);
    const result = await book.save();
    res.status(201).json(successResponseBuilder({ book: result }));
  } catch (err) {
    if (['CastError', 'ValidationError'].includes(err?.name)) {
      next(httpBadRequest(err.message));
    }
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const book = await Book.findOneAndUpdate({ _id: id }, req.body);
    if (!book) throw httpNotFound();

    res.json(successResponseBuilder({ book: book }));
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);

    const book = await Book.findOneAndDelete({ _id: id });
    if (!book) throw httpNotFound();

    res.json(successResponseBuilder({ deletedBookId: id }));
  } catch (err) {
    next(err);
  }
};
