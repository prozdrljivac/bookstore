import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import argon from 'argon2';
import jwt from 'jsonwebtoken';

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

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const existingUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: email
        }
      }
    });
    if (!existingUser) {
      return res.status(401).json({ message: 'Wrong email' });
    }

    const isCorrectPassword = await argon.verify(
      existingUser.password,
      password
    );
    if (!isCorrectPassword) {
      return res.status(401).json({ message: 'Wrong password' });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        userId: existingUser.id
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token, userId: existingUser.id });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default {
  signUp,
  signIn
};
