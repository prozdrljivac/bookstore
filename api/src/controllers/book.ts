import { Request, Response, NextFunction } from 'express';

const getBooks = (req: Request, res: Response, next: NextFunction) => {
  console.log('Book list');
  res.json('Message');
};

export default {
  getBooks
};
