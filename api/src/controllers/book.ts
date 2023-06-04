import { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await prisma.book.create({ data: req.body });
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default {
  getBooks,
  createBook
};
