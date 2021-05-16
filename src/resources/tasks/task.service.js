const taskRepo = require('./task.memory.repository');

const getAlltask = () => taskRepo.getAlltask();
const create = (task) => taskRepo.create(task);
const getById = (id) => taskRepo.getById(id);
const changetask = (id, body) => taskRepo.changetask(id, body);
const deleteById = (id) => taskRepo.deleteById(id)


module.exports = { getAlltask , create ,getById, changetask, deleteById };