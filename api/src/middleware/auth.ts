import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { AuthenticatedRequest, DecodedToken } from './types';

export const isAuthenticated = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    throw new Error('Not authenticated');
  }

  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as DecodedToken;
  } catch (error) {
    throw new Error('Something went wrong when decoding the token');
  }

  if (!decodedToken) {
    throw new Error('Not authenticated');
  }

  req.userId = decodedToken.userId;
  next();
};
