import express, { Express } from 'express';
import dotenv from 'dotenv';

import authRouts from './auth/routes';
import bookRoutes from './books/routes';

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.use(authRouts);
app.use('/books', bookRoutes);

app.listen(port);
