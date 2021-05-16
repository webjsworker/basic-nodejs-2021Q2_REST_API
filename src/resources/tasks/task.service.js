const taskRepo = require('./task.memory.repository');

const getAlltask = () => taskRepo.getAlltask();
const create = (task) => taskRepo.create(task);
const getById = (id) => taskRepo.getById(id);
/* const changetask = (id, taskid, body) => taskRepo.changetask(id, taskid, body); */
const deleteById = (id) => taskRepo.deleteById(id)


module.exports = { getAlltask , create ,getById, deleteById };