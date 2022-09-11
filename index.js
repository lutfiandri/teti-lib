import express from 'express';
import cors from 'cors';
import mongoose, { trusted } from 'mongoose';

import booksRouter from './src/routes/booksRoute.js';
import { exit } from 'process';

const app = express();

// TODO: create .env
const PORT = 3000;
const MONGO_URI =
  'mongodb+srv://paw2:glhf-paw-2@cluster0.wgmni83.mongodb.net/teti-lib?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to mongodb'))
  .catch((err) => {
    console.error(`Can't connect to mongodb`);
    console.error(err);
    exit(1);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('halo dari kelompok 2');
});

app.use('/books', booksRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
