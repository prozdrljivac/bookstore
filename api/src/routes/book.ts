import express from 'express';

import bookController from '../controllers/book';
import {
  CREATE_BOOK_VALIDATOR,
  UPDATE_BOOK_VALIDATOR
} from '../validators/books';

const router = express.Router();

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post('/', CREATE_BOOK_VALIDATOR, bookController.createBook);
router.patch('/:id', UPDATE_BOOK_VALIDATOR, bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
