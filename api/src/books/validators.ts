import { body } from 'express-validator';

export const CREATE_BOOK_VALIDATOR = [
  body('name').exists().withMessage('Missing name in request body'),
  body('name').isString().withMessage('Name must be a string'),
  body('name').notEmpty().withMessage('Name cannot be an empty string'),
  body('author').exists().withMessage('Missing author in request body'),
  body('author').isString().withMessage('Author must be a string'),
  body('author').notEmpty().withMessage('Author cannot be an empty string'),
  body('price').exists().withMessage('Missing price in request body'),
  body('price').isNumeric().withMessage('Price must be a number')
];

export const UPDATE_BOOK_VALIDATOR = [
  body('name').isString().withMessage('Name must be a string'),
  body('name').notEmpty().withMessage('Name cannot be an empty string'),
  body('author').isString().withMessage('Author must be a string'),
  body('author').notEmpty().withMessage('Author cannot be an empty string'),
  body('price').isNumeric().withMessage('Price must be a number')
];
