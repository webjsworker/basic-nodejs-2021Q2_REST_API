// const Task = require('./tasks.model')

let DBTasks = []

const getAll = (boardId) => DBTasks.filter(all => all.boardId === boardId);

const getById = async (boardId, id) => {
  const task = await DBTasks.find(ts => ts.boardId === boardId && ts.id === id)
  return task
}

const create = async (task) => {
  DBTasks = [...DBTasks, task]
  return task
}

const deleteById = async (boardId, id) => {
  DBTasks = await DBTasks.filter(ts => ts.id !== id && ts.boardId === boardId  )
}

const deleteTasksBoard = async (boardId) => {
  DBTasks = await DBTasks.filter(ts => ts.boardId !== boardId)
}

const deleteUserTasks =  (userId) => {
  DBTasks =  DBTasks.map(obj => {
    if (obj.userId === userId) {
      return {...obj, userId: null};
    }
    return obj
  })
}

const change = async (boardId, id, task) => {
  DBTasks = DBTasks.map(obj => {
    if (obj.id === id && obj.boardId === boardId) {
      return {id, ...task};
    }
    return obj
  })
  return getById(boardId, id)
}

module.exports = { getAll, getById, create, deleteById, change, deleteTasksBoard, deleteUserTasks };
