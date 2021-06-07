"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepo = require('./user.memory.repository.ts');
const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id);
const creat = (user) => usersRepo.creat(user);
const change = (id, user) => usersRepo.change(id, user);
const deleteById = (id) => usersRepo.deleteById(id);
module.exports = { getAll, getById, deleteById, creat, change };
