import express from 'express';

import authController from './controllers';
import { SIGN_UP_VALIDATOR } from './validators';

const router = express.Router();

router.post('/signup', SIGN_UP_VALIDATOR, authController.signUp);
router.post('/signin', authController.signIn);

export default router;
