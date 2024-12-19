const express = require('express');
const router = express.Router();
const { addMember, getAllMembers, getMemberById, updateMember, deleteMember } = require('../controllers/MemberController');
const { verifyRole } = require('../middleware/rbac');

// Routes
router.post('/', verifyRole(['Librarian']), addMember);
router.get('/', verifyRole(['Librarian', 'Assistant']), getAllMembers);
router.get('/:id', verifyRole(['Librarian', 'Assistant']), getMemberById);
router.put('/:id', verifyRole(['Librarian']), updateMember);
router.delete('/:id', verifyRole(['Librarian']), deleteMember);

module.exports = router;