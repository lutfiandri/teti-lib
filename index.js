import process from 'process';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import booksRouter from './src/routes/booksRoute.js';
import getenv from './src/helpers/getenv.js';
import errorHandler from './src/middlewares/errorHandler.js';

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

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on  ${PORT}...`));
