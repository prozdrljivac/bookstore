import { Request, Response, NextFunction } from 'express';

const signUp = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200);
};

export default {
  signUp
};
