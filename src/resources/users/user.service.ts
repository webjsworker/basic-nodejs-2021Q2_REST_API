export {}
const usersRepo = require('./user.memory.repository.ts');


const getAll = (): Promise<object> => usersRepo.getAll();
const getById = (id: string): Promise<object> => usersRepo.getById(id);
const creat = (user: object): Promise<object> => usersRepo.creat(user)
const change = (id: string, user: object): Promise<object> => usersRepo.change(id, user)
const deleteById = (id: string): Promise<object> => usersRepo.deleteById(id)

module.exports = { getAll, getById, deleteById, creat, change};
