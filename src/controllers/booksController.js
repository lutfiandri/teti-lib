import * as service from '../services/booksService';

export const findAll = async (req, res, next) => {
  try {
    res.json(await service.findAll());
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    res.json(await service.findById(req.params.id));
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    res.json(await service.create(req.body));
  } catch (err) {
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    res.json(await service.updateById(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    res.json(await service.deleteById(req.params.id));
  } catch (err) {
    next(err);
  }
};
