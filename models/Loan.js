const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  bookId: { type: String, ref: 'Book', required: true },
  memberId: { type: String, ref: 'Member', required: true },
  loanDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  returnDate: { type: Date, default: null }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;