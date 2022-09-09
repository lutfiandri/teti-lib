import { MongoClient } from 'mongodb';

// TODO: create .env
const MONGO_URI =
  'mongodb+srv://paw2:glhf-paw-2@cluster0.wgmni83.mongodb.net/?retryWrites=true&w=majority';
export const mongoClient = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

export const setDb = (db) => {
  dbConnection = db;
};

export const getDb = () => {
  return dbConnection;
};

export const getBooksCollection = () => getDb().collection('books');
