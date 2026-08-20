import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectMongoDB from './db/connectMongoDB.js';
import logger from './middleware/logger.js';
import notFoundHandler from './middleware/notFoundHandler.js';
import errorHandler from './middleware/errorHandler.js';
import notesRouter from './routes/notesRoutes.js';

const app = express();

app.use(express.json({
  type: ['application/json', 'application/vnd.api+json'],
}));

app.use(logger);

app.use(cors());


app.use('/notes', notesRouter);


app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

const port = Number(process.env.PORT) || 3001;
console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

