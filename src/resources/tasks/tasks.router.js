const router = require('express').Router();
/* const User = require('./user.model'); */
const taskService = require('./task.service');

/* router.route('/:id/task').get(async (req, res) => {
    const task = await taskService.getAlltask();
    res.json(task);
  }); */

  router.route('/').get(async (req, res) => {
    const task = await taskService.getAlltask();
    res.json(task);
  });


  module.exports = router;