import express from 'express';

import bookController from '../controllers/book';

const router = express.Router();

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
