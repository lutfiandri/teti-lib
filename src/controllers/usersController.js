import mongoose from 'mongoose';
import {
  httpBadRequest,
  httpNotFound,
} from '../helpers/httpExceptionBuilder.js';
import { successResponseBuilder } from '../helpers/responseBuilder.js';
import User from '../models/usersModel.js';

// export const findAll = async (req, res, next) => {
//   try {
//     const users = await User.find({});
//     res.json(successResponseBuilder({ users: users }));
//   } catch (err) {
//     next(err);
//   }
// };

export const findById = async (req, res, next) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const user = await User.findById({ _id: id }).exec();
    if (!user) throw httpNotFound();
    res.json(successResponseBuilder({ user: user }));
  } catch (err) {
    next(err);
  }
};

// export const create = async (req, res, next) => {
//   try {
//     const user = new User(req.body);
//     const result = await user.save();
//     res.status(201).json(successResponseBuilder({ user: result }));
//   } catch (err) {
//     if (['CastError', 'ValidationError'].includes(err?.name)) {
//       next(httpBadRequest(err.message));
//     }
//     next(err);
//   }
// };

// export const updateById = async (req, res, next) => {
//   try {
//     const id = mongoose.Types.ObjectId(req.params.id);
//     const user = await User.findOneAndUpdate({ _id: id }, req.body);
//     if (!user) throw httpNotFound();

//     res.json(successResponseBuilder({ user: user }));
//   } catch (err) {
//     next(err);
//   }
// };
