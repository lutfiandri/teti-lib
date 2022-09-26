import express from 'express';
import * as controller from '../controllers/borrowsController.js';

const router = express.Router();

// Get all borrows
router.get('/', controller.findAll);

// Get specific borrows by id
router.get('/:id', controller.findById);

// Borrow new book
router.post('/', controller.create);

// Delete specific borrow by id
router.delete('/:id', controller.deleteById);

export default router;
