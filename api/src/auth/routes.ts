import express from 'express';

import authController from './controllers';

const router = express.Router();

router.post('signup', authController.signUp);
router.post('signin');

export default router;
