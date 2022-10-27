import express from 'express';
import * as auth from '../middlewares/auth.js';
import * as controller from '../controllers/uploadsController.js';

const router = express.Router();

router.post(
  '/',
  auth.authenticate,
  auth.authorizeAdmin,
  controller.uploadImage
);

export default router;
