var boardsRepo = require('./boards.memory.repository');
var Board = require('./boards.model');
/**
 * This function retuens all boards
 * @returns {object} - object of boards
 */
var getAll = function () { return boardsRepo.getAll(); };
/**
 * This function delete board by id
 * @param {string} id - board's id
 * @returns {object} - object of board
 */
var deleteById = function (id) { return boardsRepo.deleteById(id); };
/**
 * This function returns board by id
 * @param {string} id - board's id
 * @returns {object} - object of board
 */
var getById = function (id) { return boardsRepo.getById(id); };
/**
 * This function change board
 * @param {string} id - board's id
 * @param {object} board - object of board
 * @returns {object} - changed board
 */
var change = function (id, board) { return boardsRepo.change(id, board); };
/**
 * This function creat new board
 * @param {object} board - object of board
 * @returns {object} - object created board
 */
var creat = function (board) { return boardsRepo.creat(new Board(board)); };
module.exports = { getAll: getAll, getById: getById, deleteById: deleteById, creat: creat, change: change };
