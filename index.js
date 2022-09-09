import express from 'express';
import cors from 'cors';

import booksRouter from './src/routes/booksRoute.js';

const app = express();

// TODO: create .env
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('halo dari kelompok 2');
});

app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
