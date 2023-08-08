import { AppDataSource } from '../../index';
import { Task } from './tasks.entity';
import {
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator/src/validation-result';
import { UpdateResult } from 'typeorm';

class TasksController {
  async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    // Declare a variable to hold all tasks
    let allTasks: Task[];

    // Fetch all tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({
        order: {
          date: 'ASC',
        },
      });

      allTasks = instanceToPlain(allTasks) as Task[];

      return res.status(200).json(allTasks);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }

  async create(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const task = new Task();
    task.title = req.body.title;
    task.date = req.body.date;
    task.description = req.body.description;
    task.priority = req.body.priority;
    task.status = req.body.status;

    let newTask = await AppDataSource.getRepository(
      Task,
    ).save(task);
    newTask = instanceToPlain(newTask) as Task;

    return res.status(201).json(newTask);
  }

  async update(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    let foundTask: Task | null;
    try {
      foundTask = await AppDataSource.getRepository(
        Task,
      ).findOne({ where: { id: req.body.id } });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }

    if (!foundTask) {
      return res.status(404).json({
        error: 'Not found task with this id',
      });
    }

    let updatedTask: UpdateResult;

    try {
      updatedTask = await AppDataSource.getRepository(
        Task,
      ).update(
        req.body.id,
        plainToInstance(Task, { status: req.body.status }),
      );

      updatedTask = instanceToPlain(
        updatedTask,
      ) as UpdateResult;

      return res.status(200).json(updatedTask);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
}

export const taskController = new TasksController();
