var tasksRepo = require('./tasks.memory.repository');
var Task = require('./tasks.model');
/**
 * This function retern all task
 * @param {string} boardId - board's id
 * @returns {object} - object of task
 */
var getAll = function (boardId) { return tasksRepo.getAll(boardId); };
/**
 * This function retern task by id
 * @param {string} boardId - board id
 * @param {string} id - task id
 * @returns {object} - object of task
 */
var getById = function (boardId, id) { return tasksRepo.getById(boardId, id); };
/**
 * This function change tsk
 * @param {object} task - object of task
 * @returns {object} - changed object of task
 */
var create = function (task) { return tasksRepo.create(new Task(task)); };
/**
 * This function delete task by id
 * @param {string} boardId - board's id
 * @param {string} id - task's id
 */
var deleteById = function (boardId, id) { return tasksRepo.deleteById(boardId, id); };
/**
 *
 * @param {string} boardId - board's id
 * @param {string} id - task's id
 * @param {object} task - object of task
 * @returns {object} - changed task
 */
var change = function (boardId, id, task) { return tasksRepo.change(boardId, id, task); };
module.exports = { getAll: getAll, getById: getById, deleteById: deleteById, create: create, change: change };
