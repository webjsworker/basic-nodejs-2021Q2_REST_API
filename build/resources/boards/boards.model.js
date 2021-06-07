"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
const Сolumns = require('./column.model.ts');
function createColumn(option) {
    const columns = [];
    for (let i = 0; i < option.length; i += 1) {
        columns.push(new Сolumns(option[i]));
    }
    return columns;
}
class Board {
    constructor({ id = uuidv4(), title = 'BOARD', columns = [] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = createColumn(columns);
    }
}
module.exports = Board;
