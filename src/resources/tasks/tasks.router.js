const router = require('express').Router();
const Task = require('./tasks.model');
const taskService = require('./task.service');

/* router.route('/:id/task').get(async (req, res) => {
    const task = await taskService.getAlltask();
    res.json(task);
  }); */

  router.route('/').get(async (req, res) => {
    const task = await taskService.getAlltask();
    res.json(task);
  });


  router.route('/').post(async (req, res) => {
     const task = await taskService.create(req.body);
    res.status(201).json(Task.toResponse(task));
  });

  router.route('/:id').get(async (req, res) => {
    const task = await taskService.getById(req.params.id);
    res.json(task);
  });

  /* router.route('/:taskid').put(async (req, res) => {
    const task = await taskService.changetask(req.params.id, req.params.taskid, req.body);
   res.json(task);
   }); */
 

   /* router.route('/:id').delete(async (req, res) => {
    const task  = await taskService.deleteById(req.params.id);
     
      res.json(task);
    }); */

  module.exports = router;