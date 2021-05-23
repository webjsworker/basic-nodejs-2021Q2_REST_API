const { v4: uuidv4 } = require('uuid');
const Сolumn = require('./column.model')

function createColumn(option) {
  const column = []
  for(let i=0; i < option.length; i +=1) {
    column.push(new Сolumn(option[i]))
  }
  return column
}

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = createColumn(columns)
  }

  static toResponse(board) {
    const {id, title, columns} = board
    return {id, title, columns}
  }
}
module.exports = Board;
