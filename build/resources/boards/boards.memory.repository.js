"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board = require('./boards.model.ts');
const DBTASK = require('../tasks/tasks.memory.repository.ts');
let DBBoards = [];
const getAll = async () => DBBoards;
const getById = async (id) => {
    const board = await DBBoards.filter(bd => bd.id === id)[0];
    return board;
};
const create = async (board) => {
    const newBoard = new Board(board);
    DBBoards = [...DBBoards, newBoard];
    return newBoard;
};
const change = async (id, boardUp) => {
    DBBoards = DBBoards.map(board => {
        if (board.id === id) {
            return { ...board, ...boardUp };
        }
        return board;
    });
    return getById(id);
};
const deleteById = async (id) => {
    const delBoard = getById(id);
    DBBoards = await DBBoards.filter(board => board.id !== id);
    DBTASK.deleteTasksBoard(id);
    return delBoard;
};
module.exports = { getAll, getById, create, deleteById, change };
