"use strict";
const { v4: uuidv4 } = require('uuid');
const Сolumn = require('./column.model');
/**
 * this function creat column
 * @param {object} option - object of column
 * @returns {object} - object of column
 */
function createColumn(option) {
    const column = [];
    for (let i = 0; i < option.length; i += 1) {
        column.push(new Сolumn(option[i]));
    }
    return column;
}
/**
 * @class
 */
class Board {
    /**
     *
     * @param {string} id - board's id
     * @param {string} title - title of board
     * @param {object} columns - column's object
     */
    constructor({ id = uuidv4(), title = 'BOARD', columns = [] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = createColumn(columns);
    }
    /**
     *
     * @param {object} board - object of board
     * @returns {object} - object of board to response
     */
    static toResponse(board) {
        const { id, title, columns } = board;
        return { id, title, columns };
    }
}
module.exports = Board;
