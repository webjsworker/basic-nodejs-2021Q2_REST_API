const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const create = user => usersRepo.create(user);
const deleteById = id => usersRepo.deleteById(id);
const ChangeUser = id =>  usersRepo.ChangeUser(id);

module.exports = { getAll , getById, create, deleteById, ChangeUser };
