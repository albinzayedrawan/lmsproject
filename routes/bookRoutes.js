const express = require('express');
const router = express.Router();
const { addBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controllers/BookController');
const { verifyRole } = require('../middleware/rbac');

// Routes
router.post('/', verifyRole(['Librarian']), addBook);
router.get('/', verifyRole(['Librarian', 'Assistant', 'Member']), getAllBooks);
router.get('/:id', verifyRole(['Librarian', 'Assistant', 'Member']), getBookById);
router.put('/:id', verifyRole(['Librarian']), updateBook);
router.delete('/:id', verifyRole(['Librarian']), deleteBook);

module.exports = router;