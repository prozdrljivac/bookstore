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

const getBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id: Number(req.params.id) }
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await prisma.book.create({ data: req.body });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await prisma.book.update({
      where: {
        id: Number(req.params.id)
      },
      data: req.body
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  await prisma.book.delete({
    where: {
      id: Number(req.params.id)
    }
  });
  res.status(204).json(null);
};

export default {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook
};
