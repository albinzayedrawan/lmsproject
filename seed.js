const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

// Load environment variables
dotenv.config();

// Import models
const Book = require('./models/Book');
const Member = require('./models/Member');
const Loan = require('./models/Loan');
const User = require('./models/User');

// Sample data
const books = [
  {
    _id: "book-001",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    ISBN: "9780743273565",
    genre: "Classic",
    publishedYear: 1925,
    publisher: "Charles Scribner's Sons",
    totalCopies: 5,
    availableCopies: 3
  },
  {
    _id: "book-002",
    title: "1984",
    author: "George Orwell",
    ISBN: "9780451524935",
    genre: "Dystopian",
    publishedYear: 1949,
    publisher: "Secker & Warburg",
    totalCopies: 4,
    availableCopies: 4
  },
  {
    _id: "book-003",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ISBN: "9780061120084",
    genre: "Fiction",
    publishedYear: 1960,
    publisher: "J.B. Lippincott & Co.",
    totalCopies: 5,
    availableCopies: 5
  }
];

const members = [
  {
    _id: "member-001",
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    address: "123 Maple Street, Springfield",
    phoneNumber: "555-0102",
    membershipStartDate: "2021-01-15",
    membershipExpiryDate: "2022-01-15"
  },
  {
    _id: "member-002",
    name: "Bob Smith",
    email: "bob.smith@email.com",
    address: "456 Oak Avenue, Riverdale",
    phoneNumber: "555-0203",
    membershipStartDate: "2021-06-10",
    membershipExpiryDate: "2022-06-10"
  }
];

const loans = [
  {
    _id: "loan-001",
    bookId: "book-001",
    memberId: "member-001",
    loanDate: "2023-03-01",
    dueDate: "2023-03-15",
    returnDate: null
  },
  {
    _id: "loan-002",
    bookId: "book-002",
    memberId: "member-002",
    loanDate: "2023-03-05",
    dueDate: "2023-03-19",
    returnDate: null
  }
];

const users = [
  {
    _id: "user-001",
    name: "John Doe",
    role: "Librarian",
    email: "john.doe@library.com",
    password: bcrypt.hashSync("password123", 10) // Hash the password
  },
  {
    _id: "user-002",
    name: "Jane Smith",
    role: "Assistant",
    email: "jane.smith@library.com",
    password: bcrypt.hashSync("password456", 10) // Hash the password
  },
  {
    _id: "user-003",
    name: "Alice Johnson",
    role: "Member",
    email: "alice.johnson@email.com",
    password: bcrypt.hashSync("password789", 10) // Hash the password
  }
];

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    // Clear existing data
    await Book.deleteMany({});
    await Member.deleteMany({});
    await Loan.deleteMany({});
    await User.deleteMany({});

    // Insert sample data
    await Book.insertMany(books);
    await Member.insertMany(members);
    await Loan.insertMany(loans);
    await User.insertMany(users);

    console.log('Data seeded successfully');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });