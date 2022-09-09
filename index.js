import express from 'express';
import cors from 'cors';

import { getBooksCollection, mongoClient, setDb } from './src/db/mongo.js';
import booksRouter from './src/routes/booksRoute.js';
import { exit } from 'process';

const app = express();

// TODO: create .env
const PORT = 3000;

mongoClient.connect((err) => {
  if (err) {
    console.log(`Can't connect to mongodb`);
    exit(1);
  }
  console.log('Connected to mongodb');
  const db = mongoClient.db('teti-lib');
  setDb(db);
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('halo dari kelompok 2');
});

app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
