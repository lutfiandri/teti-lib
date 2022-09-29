import mongoose from 'mongoose';

const borrowsSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Types.ObjectId,
      required: true,
      unique: false,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      unique: false,
    },
    borrowedAt: {
      type: Date,
      required: true,
    },
    returnedAt: {
      type: Date,
      required: false,
    },
    isReturned: {
      type: Boolean,
      required: true,
      default: false,
    },
    // type: {
    //   type: String,
    //   required: true,
    //   enum: ['BORROWING', 'RETURNING'],
    //   default: 'BORROWING',
    // },
  },
  { timestamps: true }
);

const Borrow = mongoose.model('Borrow', borrowsSchema);

export default Borrow;
