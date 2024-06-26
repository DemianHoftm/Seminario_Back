import express from 'express';
import router from './presentation/routes/index'
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

export { app };