var uuidv4 = require('uuid').v4;
var Сolumn = require('./column.model');
/**
 * this function creat column
 * @param {object} option - object of column
 * @returns {object} - object of column
 */
function createColumn(option) {
    var column = [];
    for (var i = 0; i < option.length; i += 1) {
        column.push(new Сolumn(option[i]));
    }
    return column;
}
/**
 * @class
 */
var Board = /** @class */ (function () {
    /**
     *
     * @param {string} id - board's id
     * @param {string} title - title of board
     * @param {object} columns - column's object
     */
    function Board(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'BOARD' : _d, _e = _b.columns, columns = _e === void 0 ? [] : _e;
        this.id = id;
        this.title = title;
        this.columns = createColumn(columns);
    }
    /**
     *
     * @param {object} board - object of board
     * @returns {object} - object of board to response
     */
    Board.toResponse = function (board) {
        var id = board.id, title = board.title, columns = board.columns;
        return { id: id, title: title, columns: columns };
    };
    return Board;
}());
module.exports = Board;
