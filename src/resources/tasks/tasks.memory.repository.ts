export {}
const Task = require('./tasks.model.ts')

let DBTasks: typeof Task[] = []


const getAll = async (boardId: string): Promise<object> => DBTasks.filter(all => all.boardId === boardId);


const getById = async (boardId: string, id: string): Promise<object> => {
  const task = await DBTasks.find(ts => ts.boardId === boardId && ts.id === id)
  return task!
}


const creat = async (boardId: string, task: object): Promise<object> => {
  const newTask = new Task({...task, boardId})
  DBTasks = [...DBTasks, newTask]
  return newTask
}


const change = async (boardId: string, id: string, taskUp: object): Promise<object> => {
  DBTasks = DBTasks.map(task => {
    if (task.id === id && task.boardId === boardId) {
      return {...task, ...taskUp};
    }
    return task
  })
  return getById(boardId, id)
}


const deleteById = async (boardId: string, id: string): Promise<object> => {
  const delTask = getById(boardId, id)
  DBTasks = await DBTasks.filter(ts => ts.id !== id && ts.boardId === boardId)
  return delTask
}


const deleteTasksBoard = async (boardId: string): Promise<void> => {
  DBTasks = await DBTasks.filter(ts => ts.boardId !== boardId)
}


const UpUserTasks = async (userId: string): Promise<void> => {
  DBTasks = DBTasks.map(obj => {
    if (obj.userId === userId) {
      return {...obj, userId: null};
    }
    return obj
  })
}

module.exports = { getAll, getById, creat, deleteById, change, deleteTasksBoard, UpUserTasks };


