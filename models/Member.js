const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  membershipStartDate: { type: Date, required: true },
  membershipExpiryDate: { type: Date, required: true }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;