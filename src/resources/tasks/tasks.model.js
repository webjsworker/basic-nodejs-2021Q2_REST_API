const { v4: uuidv4 } = require('uuid');

/**
 * This is class of task
 * @class
 */
class Task {
  /**
   * 
   * @param {string} id - task's id 
   * @param {string} title - task's title  
   * @param {namber} order - task's order  
   * @param {string} descroption - task's description
   * @param {sring} userId - user's id 
   * @param {string} boardId - board's id 
   * @param {string} columnId - column id 
   */
  constructor({
    id = uuidv4(),
    title = 'TASK',
    order = 0,
    description = "TASK",
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

/**
 * This function retern task's elemets
 * @param {object} task - tasks elemets 
 * @returns {object} - object of task 
 */
  static toResponse(task) {
    const {id, title, order, description, userId, boardId, columnId} = task
    return {id, title, order, description, userId, boardId, columnId}
  }

}
module.exports = Task;
