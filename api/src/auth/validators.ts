import { body } from 'express-validator';

import prisma from '../prisma';

export const SIGN_UP_VALIDATOR = [
  body('email')
    .exists()
    .withMessage('Missing email in request body')
    .isEmail()
    .withMessage('Invalid email')
    .custom(async (value) => {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: {
            equals: value
          }
        }
      });

      if (existingUser) {
        throw new Error('User with this email already exists');
      }
    }),
  body('password')
    .exists()
    .withMessage('Missing password in request body')
    .isStrongPassword()
    .withMessage('Weak password')
];
