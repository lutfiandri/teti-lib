import express from 'express';
import * as controller from '../controllers/usersController.js';

const router = express.Router();

router.get('/:id', controller.findById);

export default router;
