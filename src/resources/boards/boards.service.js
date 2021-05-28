const boardsRepo = require('./boards.memory.repository');
const Board = require('./boards.model')

/**
 * This function retuens all boards
 * @returns {object} - object of boards
 */
const getAll = () => boardsRepo.getAll();
/**
 * This function delete board by id 
 * @param {string} id - board's id 
 * @returns {object} - object of board 
 */
const deleteById = id => boardsRepo.deleteById(id)
/**
 * This function returns board by id 
 * @param {string} id - board's id
 * @returns {object} - object of board 
 */
const getById = id => boardsRepo.getById(id);
/**
 * This function change board
 * @param {string} id - board's id  
 * @param {object} board - object of board
 * @returns {object} - changed board 
 */
const change = (id, board) => boardsRepo.change(id, board)
/**
 * This function creat new board
 * @param {object} board - object of board
 * @returns {object} - object created board 
 */
const creat = board => boardsRepo.creat(new Board(board))

module.exports = { getAll, getById, deleteById, creat, change};
