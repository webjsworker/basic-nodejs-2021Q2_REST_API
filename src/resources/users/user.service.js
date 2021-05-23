const usersRepo = require('./user.memory.repository');
const User = require('./user.model')

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const creat = user => usersRepo.creat(new User(user))
const deleteById = id => usersRepo.deleteById(id)
const change = (id, user) => usersRepo.change(id, user)

module.exports = { getAll, getById, deleteById, creat, change};
