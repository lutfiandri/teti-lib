import process from 'process';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import booksRouter from './src/routes/booksRoute.js';
import usersRouter from './src/routes/usersRoute.js';
import getenv from './src/helpers/getenv.js';

const app = express();

const PORT = getenv('PORT');
const MONGO_URI = getenv('MONGO_URI');

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to mongodb'))
  .catch((err) => {
    console.error(`Can't connect to mongodb`);
    console.error(err);
    process.exit(1);
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
