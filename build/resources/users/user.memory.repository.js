"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('./user.model.ts');
const DBTASK = require('../tasks/tasks.memory.repository.ts');
let DBUsers = [];
const getAll = async () => DBUsers;
const getById = async (id) => {
    const user = await DBUsers.filter(us => us.id === id);
    return user[0];
};
const creat = async (user) => {
    const newUser = new User(user);
    DBUsers = [...DBUsers, newUser];
    return newUser;
};
const change = async (id, userUp) => {
    DBUsers = DBUsers.map(user => {
        if (user.id === id) {
            return { ...user, ...userUp };
        }
        return user;
    });
    return getById(id);
};
const deleteById = async (id) => {
    const delUser = getById(id);
    DBUsers = await DBUsers.filter(user => user.id !== id);
    DBTASK.UpUserTasks(id);
    return delUser;
};
module.exports = { getAll, getById, deleteById, creat, change };
