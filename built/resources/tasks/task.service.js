var tasksRepo = require('./tasks.memory.repository');
var Task = require('./tasks.model');
var getAll = function (boardId) { return tasksRepo.getAll(boardId); };
var getById = function (boardId, id) { return tasksRepo.getById(boardId, id); };
var create = function (task) { return tasksRepo.create(new Task(task)); };
var deleteById = function (boardId, id) { return tasksRepo.deleteById(boardId, id); };
var change = function (boardId, id, task) { return tasksRepo.change(boardId, id, task); };
module.exports = { getAll: getAll, getById: getById, deleteById: deleteById, create: create, change: change };
