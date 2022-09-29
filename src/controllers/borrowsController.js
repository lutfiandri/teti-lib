import mongoose from 'mongoose';
import Borrow from '../models/borrowsModel.js';

// Admin only
export const findAll = async (req, res, next) => {
  try {
    const filter = {};

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
    const userId = req.user.id;
    const borrow = new Borrow({
      userId: mongoose.Types.ObjectId(userId),
      bookId: req.body.bookId,
      borrowedAt: new Date(),
      isReturned: false,
    });
    const result = await borrow.save();
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
