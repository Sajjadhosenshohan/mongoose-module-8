import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { globalErrorHandling } from './app/middlewares/globalErrorHandling';
import { notFound } from './app/middlewares/notFound';
import router from './app/router';


const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// app.use('/api/v1/students', router)
// app.use('/api/v1/users', UserRoutes)
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// not found
app.use(notFound);
// global error handle
app.use(globalErrorHandling);
export default app;
