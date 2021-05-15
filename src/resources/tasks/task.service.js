const taskRepo = require('./task.memory.repository');

const getAlltask = () => taskRepo.getAlltask();


module.exports = { getAlltask };