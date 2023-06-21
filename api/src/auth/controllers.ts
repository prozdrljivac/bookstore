import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as argon from 'argon2';

import prisma from '../prisma';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;
    const hashedPassword = await argon.hash(password);
    const usr = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    res.status(201).json({ name: usr.name, email: usr.email });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default {
  signUp
};
