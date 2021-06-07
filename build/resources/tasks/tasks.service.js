"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepo = require('./tasks.memory.repository.ts');
const getAll = (boardId) => tasksRepo.getAll(boardId);
const getById = (boardId, id) => tasksRepo.getById(boardId, id);
const creat = (boardId, task) => tasksRepo.creat(boardId, task);
const change = (boardId, id, task) => tasksRepo.change(boardId, id, task);
const deleteById = (boardId, id) => tasksRepo.deleteById(boardId, id);
module.exports = { getAll, getById, deleteById, creat, change };
