"use strict";
// const Board = require('./boards.model')
const DBTASK = require('../tasks/tasks.memory.repository');
/**
 * Array of board
 * @type {Array}
 */
let DBBoards = [];
/** This function returns all board
 * @returns {object} - object all board
 */
const getAll = () => DBBoards;
/**
 * This function retutns board by id
 * @param {string} id - board's id
 * @returns {object} - object of board
 */
const getById = async (id) => {
    const board = await DBBoards.filter(bd => bd.id === id);
    return board[0];
};
/**
 * This function returns created board
 * @param {object} board - object of board
 * @returns {object} - object of created board
 */
const creat = async (board) => {
    DBBoards = [...DBBoards, board];
    return board;
};
/**
 * This function delete board by id
 * @param {string} id - board's id
 */
const deleteById = async (id) => {
    DBBoards = await DBBoards.filter(bd => bd.id !== id);
    DBTASK.deleteTasksBoard(id);
};
/**
 *
 * @param {string} id - board's id
 * @param {object} board - board's object
 * @param {id} - object include all boards
 */
const change = async (id, board) => {
    DBBoards = DBBoards.map(obj => {
        if (obj.id === id) {
            return { id, ...board };
        }
        return obj;
    });
    return getById(id);
};
module.exports = { getAll, getById, creat, deleteById, change };
