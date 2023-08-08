import { body } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator = [
  body('title')
    .notEmpty()
    .withMessage('The task title is mandatory')
    .trim()
    .isString()
    .withMessage('Title needs to be in text format'),

  body('date')
    .notEmpty()
    .withMessage('The task date is mandatory')
    .isString()
    .withMessage(
      'The date needs to be a valid date format',
    ),

  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format'),

  body('priority')
    .trim()
    .isIn([Priority.low, Priority.normal, Priority.high])
    .withMessage(
      'Priority can only be low, normal or high',
    ),

  body('status')
    .trim()
    .isIn([
      Status.toDo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'Status can only be toDo, inProgress, completed',
    ),
];

export const updateValidator = [
  body('id')
    .notEmpty()
    .withMessage('The task id is mandatory')
    .trim()
    .isString()
    .withMessage('Id needs to be in text format'),

  body('status')
    .trim()
    .isIn([
      Status.toDo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'Status can only be toDo, inProgress, completed',
    ),
];
