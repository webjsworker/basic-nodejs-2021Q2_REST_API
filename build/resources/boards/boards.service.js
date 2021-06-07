"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boardsRepo = require('./boards.memory.repository.ts');
const getAll = () => boardsRepo.getAll();
const getById = (id) => boardsRepo.getById(id);
const create = (board) => boardsRepo.create(board);
const change = (id, board) => boardsRepo.change(id, board);
const deleteById = (id) => boardsRepo.deleteById(id);
module.exports = { getAll, getById, deleteById, create, change };
