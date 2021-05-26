var boardsRepo = require('./boards.memory.repository');
var Board = require('./boards.model');
var getAll = function () { return boardsRepo.getAll(); };
var deleteById = function (id) { return boardsRepo.deleteById(id); };
var getById = function (id) { return boardsRepo.getById(id); };
var change = function (id, board) { return boardsRepo.change(id, board); };
var creat = function (board) { return boardsRepo.creat(new Board(board)); };
module.exports = { getAll: getAll, getById: getById, deleteById: deleteById, creat: creat, change: change };
