import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Task } from './src/tasks/tasks.entity';
import cors from 'cors';
import bodyParser from 'body-parser';
import { tasksRouter } from './src/tasks/tasks.router';

const app: Express = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

const port = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
    console.log('Data Source initialized');
  })
  .catch((err) => {
    console.error('Error initializing data source', err);
  });

app.use('/', tasksRouter);
