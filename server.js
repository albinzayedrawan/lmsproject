const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Set mongoose strictQuery to true
mongoose.set('strictQuery', true);

// Import Routes
const bookRoutes = require('./routes/bookRoutes.js');
const userRoutes = require('./routes/userRoutes');
const memberRoutes = require('./routes/memberRoutes');
const loanRoutes = require('./routes/loanRoutes');
const authenticate = require('./middleware/auth');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/books', authenticate, bookRoutes);
app.use('/api/users', userRoutes); // No authentication for login
app.use('/api/members', authenticate, memberRoutes);
app.use('/api/loans', authenticate, loanRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});