const router = require('express').Router({mergeParams: true});
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  await res.json(tasks.map(Task.toResponse));
});

router.route('/').post(async (req, res) => {
  const boardbody = req.params.boardId
  const {title, order, description, boardId, columnId, userId} = req.body
  const taskObj = {
    'title': title, 
    'order': order, 
    'description': description, 
    'boardId': boardId || boardbody,
    'columnId': columnId,
    'userId': userId
  }
  const task = await tasksService.create(taskObj);
  res.status(201).send(Task.toResponse(task));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getById(req.params.boardId, req.params.id);
  if(!task) {
    res.status(404).json()
  }
  res.status(200).send(task);
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.deleteById(req.params.boardId, req.params.id)
  res.sendStatus(200)
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.change(req.params.boardId,req.params.id,req.body);
  res.status(200).send(task);
});

module.exports = router;
