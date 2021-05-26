var uuidv4 = require('uuid').v4;
var Сolumn = require('./column.model');
function createColumn(option) {
    var column = [];
    for (var i = 0; i < option.length; i += 1) {
        column.push(new Сolumn(option[i]));
    }
    return column;
}
var Board = /** @class */ (function () {
    function Board(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'BOARD' : _d, _e = _b.columns, columns = _e === void 0 ? [] : _e;
        this.id = id;
        this.title = title;
        this.columns = createColumn(columns);
    }
    Board.toResponse = function (board) {
        var id = board.id, title = board.title, columns = board.columns;
        return { id: id, title: title, columns: columns };
    };
    return Board;
}());
module.exports = Board;
