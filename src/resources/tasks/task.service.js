const tasksRepo = require('./tasks.memory.repository');
const Task = require('./tasks.model')

const getAll = (boardId) => tasksRepo.getAll(boardId);
const getById = (boardId, id) => tasksRepo.getById(boardId, id);
const create = (task) => tasksRepo.create(new Task(task))
const deleteById = (boardId, id) => tasksRepo.deleteById(boardId, id)
const change = (boardId, id, task) => tasksRepo.change(boardId, id, task)

module.exports = { getAll, getById, deleteById, create, change};
