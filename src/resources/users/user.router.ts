const router = require('express').Router();
/* import {User} from './user.model'; */
import { Request, Response, NextFunction } from 'express';
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/').get(async (res:Response) => {
  const users = await usersService.getAll();
  await res.json(users.map(User.toResponse));
});
// Get user by Id 
router.route('/:id').get(async (req:Request, res:Response) => {
  const user = await usersService.getById(req.params.id);
  if(!user) {
    res.status(404)
  }
  res.status(200).send(User.toResponse(user));
});
// Delet user by Id
router.route('/:id').delete(async (req:Request, res:Response) => {
  await usersService.deleteById(req.params.id);
  res.sendStatus(200)
});
/// create new user
router.route('/').post(async (req:Request, res:Response) => {
  const user = await usersService.creat(User.ReqBody(req.body));
  res.status(201).send(User.toResponse(user));
});

router.route('/:id').put(async (req:Request, res:Response) => {
  const user = await usersService.change(req.params.id,User.ReqBody(req.body));
  if(!user) {
    res.status(404)
  }
  res.status(200).send(User.toResponse(user));
});

module.exports = router;
