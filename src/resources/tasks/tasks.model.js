const uuid = require('uuid');

class Task {
  constructor({
    id = uuid.v4(),
    title = 'string',
    order = 0,
    description = 'string',
    userId = 'string',
    boardId = 'stringe',
    columnId = 'string'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /* static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  } */
}

module.exports = Task;
