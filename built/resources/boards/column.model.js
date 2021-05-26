var uuidv4 = require('uuid').v4;
var Сolumn = /** @class */ (function () {
    function Сolumn(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'BOARD' : _d, _e = _b.order, order = _e === void 0 ? 0 : _e;
        this.id = id;
        this.title = title;
        this.order = order;
    }
    return Сolumn;
}());
module.exports = Сolumn;
