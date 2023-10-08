import express from 'express';
const router = express.Router();
import * as bookController from '../controllers/bookController.js';

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.delete('/:ISBN', bookController.deleteBookByISBN);

router.put('/:id', bookController.updateBookById);

export default router;
