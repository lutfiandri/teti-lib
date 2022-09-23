import express from 'express';
import * as controller from '../controllers/usersController.js';

const router = express.Router();

// Get all users
router.get('/', controller.findAll);

// Get specific users by id
router.get('/:id', controller.findById);

// Create new book
router.post('/', controller.create);

// Update specific usesrs by id
router.put('/:id', controller.updateById);

// Delete specific users by id
router.delete('/:id', controller.deleteById);

export default router;
