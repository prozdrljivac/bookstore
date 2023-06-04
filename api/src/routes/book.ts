import express from 'express';

import bookController from '../controllers/book';

const router = express.Router();

router.get('/', bookController.getBooks);
router.post('/', bookController.createBook);

export default router;
