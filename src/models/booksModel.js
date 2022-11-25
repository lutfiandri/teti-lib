import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // isbn: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
    isFiction: {
      type: Boolean,
      required: true,
    },
    numOfBooks: {
      type: Number,
      required: true,
    },
    numOfAvailableBooks: {
      type: Number,
      default: function () {
        return this.numOfBooks;
      },
    },
    genres: {
      type: [String],
      required: false,
    },
    numOfPages: {
      type: Number,
      required: false,
    },
    borrowerIds: {
      type: [mongoose.Types.ObjectId],
      required: false,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
