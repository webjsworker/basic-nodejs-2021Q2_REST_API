// const Task = require('./tasks.model')
/**
 * It's task's array 
 * @type {Array}
 */
let DBTasks = []

/**
 * This function retern task by board's id
 * @param {string} boardId - board's id 
 * @returns {object} - object of task 
 */
const getAll = (boardId) => DBTasks.filter(all => all.boardId === boardId);
/**
 * This function retern task by id fron board
 * @param {string} boardId - board's id 
 * @param {string} id - tsk's id  
 * @returns {object} - object of task
 */

const getById = async (boardId, id) => {
  const task = await DBTasks.find(ts => ts.boardId === boardId && ts.id === id)
  return task
}
/**
 * This function crate new task 
 * @param {object} task - Object of task
 * @returns {object} - object of task 
 */
const create = async (task) => {
  DBTasks = [...DBTasks, task]
  return task
}
/**
 * This function delete task by id from board
 * @param {string} boardId - board's id 
 * @param {string} id - task id 
 */
const deleteById = async (boardId, id) => {
  DBTasks = await DBTasks.filter(ts => ts.id !== id && ts.boardId === boardId  )
}
 /**
  * This function delet task with board id 
  * @param {string} boardId board id 
  */
const deleteTasksBoard = async (boardId) => {
  DBTasks = await DBTasks.filter(ts => ts.boardId !== boardId)
}
/**
 * This function delete user's task 
 * @param {string} userId - user id 
 * @param {Array} tasksArray - Array of task
 * @returns {object} - object task without user's task
 */
const deleteUserTasks =  (userId) => {
  DBTasks =  DBTasks.map(tasksArray => {
    if (tasksArray.userId === userId) {
      return {...tasksArray, userId: null};
    }
    return tasksArray
  })
}
/**
 * 
 * @param {string} boardId - board id  
 * @param {string} id - task's id 
 * @param {object} task - Object task with new date 
 * @param {Array} tasksArray - Array of task
 * @returns {object} - new created task 
 */
const change = async (boardId, id, task) => {
  DBTasks = DBTasks.map(tasksArray => {
    if (tasksArray.id === id && tasksArray.boardId === boardId) {
      return {id, ...task};
    }
    return tasksArray
  })
  return getById(boardId, id)
}

module.exports = { getAll, getById, create, deleteById, change, deleteTasksBoard, deleteUserTasks };
