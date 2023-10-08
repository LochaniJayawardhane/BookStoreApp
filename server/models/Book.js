import mongoose from 'mongoose';

const { Schema } = mongoose;

const newBook = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Book = mongoose.model('Book', newBook);
export default Book;
