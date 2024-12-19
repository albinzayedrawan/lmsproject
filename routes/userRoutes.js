const express = require('express');
const router = express.Router();
const { addUser, getAllUsers, loginUser } = require('../controllers/UserController');
const { verifyRole } = require('../middleware/rbac');
const authenticate = require('../middleware/auth');

// Routes
router.post('/', authenticate, verifyRole(['Librarian']), addUser); // Only Librarian can add users
router.get('/', authenticate, verifyRole(['Librarian']), getAllUsers); // Only Librarian can get all users
router.post('/login', loginUser); // Login route accessible to all

module.exports = router;