const tasksRepo = require('./tasks.memory.repository');
const Task = require('./tasks.model')

/**
 * This function retern all task 
 * @param {string} boardId - board's id  
 * @returns {object} - object of task
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);
/**
 * This function retern task by id 
 * @param {string} boardId - board id 
 * @param {string} id - task id  
 * @returns {object} - object of task
 */
const getById = (boardId, id) => tasksRepo.getById(boardId, id);
/**
 * This function change tsk
 * @param {object} task - object of task 
 * @returns {object} - changed object of task
 */
const create = (task) => tasksRepo.create(new Task(task))
/**
 * This function delete task by id 
 * @param {string} boardId - board's id 
 * @param {string} id - task's id 
 */
const deleteById = (boardId, id) => tasksRepo.deleteById(boardId, id)
/**
 * 
 * @param {string} boardId - board's id
 * @param {string} id - task's id 
 * @param {object} task - object of task 
 * @returns {object} - changed task 
 */
const change = (boardId, id, task) => tasksRepo.change(boardId, id, task)

module.exports = { getAll, getById, deleteById, create, change};
