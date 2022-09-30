import mongoose from 'mongoose';
import Book from '../models/booksModel.js';
import Borrow from '../models/borrowsModel.js';
import User from '../models/usersModel.js';

// Admin only
export const findAll = async (req, res, next) => {
  try {
    const filter = {};

    // if user -> only show theirs
    if (!req.user.isAdmin) filter.userId = req.user.id;

    // isReturned
    if (req.query.returned === 'true') filter.isReturned = true;
    if (req.query.returned === 'false') filter.isReturned = false;

    const borrow = await Borrow.find(filter);

    res.json(borrow);
  } catch (err) {
    next(err);
  }
};

export const findAllByUserId = async (req, res, next) => {
  try {
    let userId = req.user.isAdmin ? req.body.userId : req.user.id;

    const filter = { userId: userId };

    // isReturned
    if (req.query.returned === 'true') filter.isReturned = true;
    if (req.query.returned === 'false') filter.isReturned = false;

    const borrows = await Borrow.find(filter);
    res.json(borrows);
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);

    const borrow = await Borrow.findById(id).exec();

    if (borrow === null) {
      next({
        message: `Borrowing session with id ${id} is not found`,
        stack: null,
        statusCode: 404,
      });
    }

    res.json({
      id: id,
      borrow: borrow,
    });
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    // Verify book availibility
    const book = await Book.findOne({ _id: req.body.bookId });
    if (book.numOfAvailableBooks < 1) {
      next({
        message: 'out of book',
        statusCode: 409,
      });
      return;
    }

    // Add book
    const borrow = new Borrow({
      userId: req.user.id,
      bookId: req.body.bookId,
      borrowedAt: new Date(),
      isReturned: false,
    });
    const result = await borrow.save();

    // Add borrwerId and -1 numOfAvailableBooks
    await Book.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.bookId) },
      {
        numOfAvailableBooks: book.numOfAvailableBooks - 1,
        borrowerIds: [...book.borrowerIds, req.user.id],
      }
    );

    // Add bookId on User.borrowedBookIds
    const user = await User.findOne({ _id: req.user.id });
    await User.updateOne(
      { _id: req.user.id },
      {
        borrowedBookIds: [...user.borrowedBookIds, book._id],
      }
    );

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

export const updateReturn = async (req, res, next) => {
  try {
    // Change status isReturned to true
    const result = await Borrow.updateOne(
      {
        // look for this doc
        userId: mongoose.Types.ObjectId(req.user.id),
        bookId: mongoose.Types.ObjectId(req.body.bookId),
        isReturned: false,
      },
      {
        // and update the doc's value
        isReturned: true,
        returnedAt: new Date(),
      }
    );

    // Remove one borrowerId from book
    const book = await Book.findOne({ _id: req.body.bookId });

    const borrowerIndex = book.borrowerIds.indexOf(req.user.id);
    book.borrowerIds.splice(borrowerIndex, 1);

    await Book.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.bookId) },
      {
        numOfAvailableBooks: book.numOfAvailableBooks + 1,
        borrowerIds: book.borrowerIds,
      }
    );

    // Remove one borrowedBookId from user
    const user = await User.findOne({ _id: req.user.id });

    const userIndex = user.borrowedBookIds.indexOf(req.body.bookId);
    user.borrowedBookIds.splice(userIndex, 1);

    await User.updateOne(
      { _id: mongoose.Types.ObjectId(req.user.id) },
      {
        borrowedBookIds: user.borrowedBookIds,
      }
    );

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

export const deleteById = async (req, res, next) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);

    const response = await Borrow.deleteOne({ _id: id });
    res.json({ response });
  } catch (err) {
    next(err);
  }
};
