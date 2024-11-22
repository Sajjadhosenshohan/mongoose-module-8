import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import router from './app/config/modules/student/student_route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
app.use('/api/v1/students', router)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
