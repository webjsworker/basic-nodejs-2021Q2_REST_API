"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* const usersRepo = require('./user.memory.repository'); */
var user_memory_repository_1 = require("./user.memory.repository");
module.exports = { getAll: user_memory_repository_1.getAll, getById: user_memory_repository_1.getById, deleteById: user_memory_repository_1.deleteById, creat: user_memory_repository_1.creat, change: user_memory_repository_1.change };
