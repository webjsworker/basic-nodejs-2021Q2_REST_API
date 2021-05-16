const boardRepo = require('./board.memory.repository');

const getAllBoard = () => boardRepo.getAllBoard();
const creat = board => boardRepo.creat(board)  ;
const getById = id => boardRepo.getById(id);
const changeBoard = (id, body) =>  boardRepo.changeBoard(id, body);
const deleteById = id => boardRepo.deleteById(id);

module.exports = { getAllBoard, creat, getById, changeBoard, deleteById } ;
