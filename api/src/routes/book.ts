import express from 'express';

import bookController from '../controllers/book';

const router = express.Router();

router.get('/', bookController.getBooks);

export default router;
