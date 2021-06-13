export {}
const boardsRepo = require('./boards.memory.repository.ts');


const getAll = (): Promise<object> => boardsRepo.getAll();
const getById = (id: string): Promise<object> => boardsRepo.getById(id);
const create = (board: object): Promise<object> => boardsRepo.create(board)
const change = (id: string, board: object): Promise<object> => boardsRepo.change(id, board)
const deleteById = (id: string): Promise<object> => boardsRepo.deleteById(id)

module.exports = { getAll, getById, deleteById, create, change};
