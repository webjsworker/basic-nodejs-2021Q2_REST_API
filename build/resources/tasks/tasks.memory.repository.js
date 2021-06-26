var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _this = this;
// const Task = require('./tasks.model')
/**
 * It's task's array
 * @type {Array}
 */
var DBTasks = [];
/**
 * This function retern task by board's id
 * @param {string} boardId - board's id
 * @returns {object} - object of task
 */
var getAll = function (boardId) { return DBTasks.filter(function (all) { return all.boardId === boardId; }); };
/**
 * This function retern task by id fron board
 * @param {string} boardId - board's id
 * @param {string} id - tsk's id
 * @returns {object} - object of task
 */
var getById = function (boardId, id) { return __awaiter(_this, void 0, void 0, function () {
    var task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DBTasks.find(function (ts) { return ts.boardId === boardId && ts.id === id; })];
            case 1:
                task = _a.sent();
                return [2 /*return*/, task];
        }
    });
}); };
/**
 * This function crate new task
 * @param {object} task - Object of task
 * @returns {object} - object of task
 */
var create = function (task) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        DBTasks = __spreadArray(__spreadArray([], DBTasks), [task]);
        return [2 /*return*/, task];
    });
}); };
/**
 * This function delete task by id from board
 * @param {string} boardId - board's id
 * @param {string} id - task id
 */
var deleteById = function (boardId, id) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DBTasks.filter(function (ts) { return ts.id !== id && ts.boardId === boardId; })];
            case 1:
                DBTasks = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/**
 * This function delet task with board id
 * @param {string} boardId board id
 */
var deleteTasksBoard = function (boardId) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DBTasks.filter(function (ts) { return ts.boardId !== boardId; })];
            case 1:
                DBTasks = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/**
 * This function delete user's task
 * @param {string} userId - user id
 * @param {Array} tasksArray - Array of task
 * @returns {object} - object task without user's task
 */
var deleteUserTasks = function (userId) {
    DBTasks = DBTasks.map(function (tasksArray) {
        if (tasksArray.userId === userId) {
            return __assign(__assign({}, tasksArray), { userId: null });
        }
        return tasksArray;
    });
};
/**
 *
 * @param {string} boardId - board id
 * @param {string} id - task's id
 * @param {object} task - Object task with new date
 * @param {Array} tasksArray - Array of task
 * @returns {object} - new created task
 */
var change = function (boardId, id, task) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        DBTasks = DBTasks.map(function (tasksArray) {
            if (tasksArray.id === id && tasksArray.boardId === boardId) {
                return __assign({ id: id }, task);
            }
            return tasksArray;
        });
        return [2 /*return*/, getById(boardId, id)];
    });
}); };
module.exports = { getAll: getAll, getById: getById, create: create, deleteById: deleteById, change: change, deleteTasksBoard: deleteTasksBoard, deleteUserTasks: deleteUserTasks };
