const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
  genre: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  publisher: { type: String, required: true },
  totalCopies: { type: Number, required: true },
  availableCopies: { type: Number, required: true }
});

bookSchema.index({ title: 'text', author: 'text' });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;