// const Board = require('./boards.model')
const DBTASK = require('../tasks/tasks.memory.repository')

let DBBoards = []

const getAll = () => DBBoards;

const getById = async id => {
  const board = await DBBoards.filter(bd => bd.id === id)
  return board[0]
}

const creat = async board => {
  DBBoards = [...DBBoards, board]
  return board
}

const deleteById = async id => {
  DBBoards = await DBBoards.filter(bd => bd.id !== id)
  DBTASK.deleteTasksBoard(id)
}

const change = async (id, board) => {
  DBBoards = DBBoards.map(obj => {
    if (obj.id === id) {
      return {id, ...board};
    }
    return obj
  })
  return getById(id)
}

module.exports = { getAll, getById, creat, deleteById, change };
