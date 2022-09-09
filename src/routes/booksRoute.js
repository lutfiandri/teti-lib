import express from 'express';
import * as controller from '../controllers/booksController.js';

const router = express.Router();

// Get all books
router.get('/', (req, res) => controller.findAll);

// Get specific book by id
router.get('/:id', (req, res) => controller.findById);

// Create new book
router.post('/', (req, res) => controller.create);

// Update specific book by id
router.put('/:id', (req, res) => controller.updateById);

// Delete specific book by id
router.delete('/:id', (req, res) => controller.deleteById);

export default router;
