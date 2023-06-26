import express, { Express } from 'express';
import dotenv from 'dotenv';

import authRouts from './auth/routes';
import bookRoutes from './books/routes';
import { isAuthenticated } from './middleware/auth';

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.use(authRouts);
app.use('/books', isAuthenticated, bookRoutes);

app.listen(port);
