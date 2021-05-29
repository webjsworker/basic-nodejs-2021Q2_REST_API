"use strict";
const { v4: uuidv4 } = require('uuid');
/**
 * Calss of column
 * @class
 */
class Сolumn {
    /**
     *
     * @param {string} id - column's id
     * @param {string} title - title of board
     * @param {namber} order - namber of order
     */
    constructor({ id = uuidv4(), title = 'BOARD', order = 0 } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}
module.exports = Сolumn;
