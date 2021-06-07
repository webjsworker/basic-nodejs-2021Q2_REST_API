export {}
const tasksRepo = require('./tasks.memory.repository.ts');

const getAll = (boardId: string): Promise<object> => tasksRepo.getAll(boardId);
const getById = (boardId: string, id: string): Promise<object> => tasksRepo.getById(boardId, id);
const creat = (boardId: string, task: object): Promise<object> => tasksRepo.creat(boardId, task)
const  change = (boardId: string, id: string, task: object): Promise<object> => tasksRepo. change(boardId, id, task)
const deleteById = (boardId: string, id: string): Promise<object> => tasksRepo.deleteById(boardId, id)

module.exports = { getAll, getById, deleteById, creat, change};
