import express from 'express';
import * as controller from '../controllers/borrowsController.js';
import * as auth from '../middlewares/auth.js';

const router = express.Router();

// Get all borrows
router.get('/', auth.authenticate, controller.findAll);

// Get specific borrows by id
router.get('/:id', auth.authenticate, controller.findById);

// Borrow new book
router.post('/', auth.authenticate, controller.create);

// Delete specific borrow by id
// router.delete('/:id', controller.deleteById);

export default router;
