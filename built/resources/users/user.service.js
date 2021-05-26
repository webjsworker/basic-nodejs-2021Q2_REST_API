var usersRepo = require('./user.memory.repository');
var User = require('./user.model');
var getAll = function () { return usersRepo.getAll(); };
var getById = function (id) { return usersRepo.getById(id); };
var creat = function (user) { return usersRepo.creat(new User(user)); };
var deleteById = function (id) { return usersRepo.deleteById(id); };
var change = function (id, user) { return usersRepo.change(id, user); };
module.exports = { getAll: getAll, getById: getById, deleteById: deleteById, creat: creat, change: change };
