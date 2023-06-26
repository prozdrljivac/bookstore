import { Request } from 'express';

export interface DecodedToken {
  email: string;
  userId: number;
}

export interface AuthenticatedRequest extends Request {
  userId?: number;
}
