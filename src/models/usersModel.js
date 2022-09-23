import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // isbn: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
    // author: {
    //   type: String,
    //   required: true,
    // },
    // publisher: {
    //   type: String,
    //   required: true,
    // },
    // is_fiction: {
    //   type: Boolean,
    //   required: true,
    // },
    // num_of_books: {
    //   type: String,
    //   required: false,
    // },
    // genres: {
    //   type: [String],
    //   required: false,
    // },
    // num_of_pages: {
    //   type: String,
    //   required: false,
    // },
    // borrowers_id: {
    //   type: [String],
    //   required: false,
    // },
    // rating: {
    //   type: Number,
    //   required: false,
    //   default: 0,
    // },
    // rating_count: {
    //   type: Number,
    //   required: false,
    //   default: 0,
    // },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
