// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { check, validationResult } = require('express-validator');

// Add comment
router.post('/', [
    check('comment').not().isEmpty().withMessage('Comment is required'),
    check('comment').isLength({ min: 10 }).withMessage('Comment must be at least 10 characters long')
    ], commentController.addComment);

// Update comment
router.put('/:id', [
    check('comment').not().isEmpty().withMessage('Comment is required'),
    check('comment').isLength({ min: 10 }).withMessage('Comment must be at least 10 characters long')
    ], commentController.updateComment);

// Delete comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;