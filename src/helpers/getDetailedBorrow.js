import Book from '../models/booksModel.js';
import User from '../models/usersModel.js';

export const getDetailedBorrow = async (borrow) => {
  try {
    const detailedBorrow = {
      ...borrow._doc,
      book: await Book.findOne({ _id: borrow.bookId }),
      user: await User.findOne({ _id: borrow.userId }),
    };
    return detailedBorrow;
  } catch (error) {
    return error;
  }
};

export const getDetailedBorrows = async (borrows) => {
  try {
    // memoization
    // note: meski kurang efektif karena banyak request async bersamaan,
    //       tetapi masih bisa mengurangi jumlah request ke db
    const books = {};
    const users = {};

    // start mapping
    const detailedBorrows = await Promise.all(
      borrows.map(async (borrow) => {
        const detailedBorrow = { ...borrow._doc };

        if (books[borrow.bookId]) {
          // get from memo
          detailedBorrow.book = books[borrow.bookId];
        } else {
          const book = await Book.findOne({ _id: borrow.bookId });
          detailedBorrow.book = book;
          books[borrow.bookId] = book;
        }

        if (users[borrow.userId]) {
          // get from memo
          detailedBorrow.user = users[borrow.userId];
        } else {
          const user = await User.findOne({ _id: borrow.userId });
          detailedBorrow.user = user;
          users[borrow.userId] = user;
        }

        return detailedBorrow;
      })
    );

    return detailedBorrows;
  } catch (error) {
    return error;
  }
};
