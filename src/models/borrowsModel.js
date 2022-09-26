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
        type: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Borrow = mongoose.model('Borrow', borrowsSchema);

export default Borrow;
