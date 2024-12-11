import express from 'express';
import { AppDataSource } from './config/database';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.error('Error during Data Source initialization', error);
  }
};

startServer();
