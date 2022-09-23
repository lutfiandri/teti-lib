import mongoose from 'mongoose';
import User from '../models/usersModel.js';

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
    const user = new User(req.body);
    const result = await user.save();
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
    // code here
    res.json({});
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    // code here
    const id = mongoose.Types.ObjectId(req.params.id);

    const response = await User.deleteOne({ _id: id });
    res.json({response});
  } catch (err) {
    next(err);
  }
};
