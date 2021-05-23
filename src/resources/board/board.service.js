const boardsRepo = require('./boards.memory.repository');
const Board = require('./boards.model')

const getAll = () => boardsRepo.getAll();
const deleteById = id => boardsRepo.deleteById(id)
const getById = id => boardsRepo.getById(id);
const change = (id, board) => boardsRepo.change(id, board)
const creat = board => boardsRepo.creat(new Board(board))

module.exports = { getAll, getById, deleteById, creat, change};

