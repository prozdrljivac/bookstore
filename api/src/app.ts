import express, { Express } from 'express';
import dotenv from 'dotenv';

import bookRoutes from './routes/book';

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.use(bookRoutes);

app.listen(port);
