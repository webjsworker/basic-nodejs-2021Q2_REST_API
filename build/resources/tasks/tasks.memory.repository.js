"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('./tasks.model.ts');
let DBTasks = [];
const getAll = async (boardId) => DBTasks.filter(all => all.boardId === boardId);
const getById = async (boardId, id) => {
    const task = await DBTasks.find(ts => ts.boardId === boardId && ts.id === id);
    return task;
};
const creat = async (boardId, task) => {
    const newTask = new Task({ ...task, boardId });
    DBTasks = [...DBTasks, newTask];
    return newTask;
};
const change = async (boardId, id, taskUp) => {
    DBTasks = DBTasks.map(task => {
        if (task.id === id && task.boardId === boardId) {
            return { ...task, ...taskUp };
        }
        return task;
    });
    return getById(boardId, id);
};
const deleteById = async (boardId, id) => {
    const delTask = getById(boardId, id);
    DBTasks = await DBTasks.filter(ts => ts.id !== id && ts.boardId === boardId);
    return delTask;
};
const deleteTasksBoard = async (boardId) => {
    DBTasks = await DBTasks.filter(ts => ts.boardId !== boardId);
};
const UpUserTasks = async (userId) => {
    DBTasks = DBTasks.map(obj => {
        if (obj.userId === userId) {
            return { ...obj, userId: null };
        }
        return obj;
    });
};
module.exports = { getAll, getById, creat, deleteById, change, deleteTasksBoard, UpUserTasks };
