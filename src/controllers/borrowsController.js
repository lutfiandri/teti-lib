import mongoose from 'mongoose';
import Borrow from '../models/borrowsModel.js';

export const findAll = async (req, res, next) => {
    try {
        const borrow = await Borrow.find({});

        res.json(borrow);

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
        const borrow = new Borrow(req.body);
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


export const deleteById = async (req, res, next) => {
    try {
        const id = mongoose.Types.ObjectId(req.params.id);

        const response = await Borrow.deleteOne({ _id: id });
        res.json({ response });
    } catch (err) {
        next(err);
    }
};
