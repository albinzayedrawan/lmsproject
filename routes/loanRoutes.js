const express = require('express');
const router = express.Router();
const { addLoan, getAllLoans, getLoanById, updateLoan, deleteLoan } = require('../controllers/LoanController');
const { verifyRole } = require('../middleware/rbac');

// Routes
router.post('/', verifyRole(['Librarian']), addLoan);
router.get('/', verifyRole(['Librarian', 'Assistant']), getAllLoans);
router.get('/:id', verifyRole(['Librarian', 'Assistant']), getLoanById);
router.put('/:id', verifyRole(['Librarian']), updateLoan);
router.delete('/:id', verifyRole(['Librarian']), deleteLoan);

module.exports = router;