"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4 = require('uuid').v4;
/**
 * This is class of user
 * @class
 */
var User = /** @class */ (function () {
    function User() {
        this.id = uuidv4();
        this.name = 'USER';
        this.login = 'user';
        this.password = 'P@55w0rd';
    }
    /**
     *
     * @param {string} id - user's id
     * @param {string} name - user's name
     * @param {string} login - user's login
     * @param {string} password - user's password
     */
    /*  constructor({
       id = uuidv4(),
       name = 'USER',
       login = 'user',
       password = 'P@55w0rd'
     } = {}) {
       this.id = id;
       this.name = name;
       this.login = login;
       this.password = password;
     } */
    /**
     *
     * @param {object} user - user
     * @returns {string} - some parametrs
     */
    User.toResponse = function (user) {
        var id = user.id, name = user.name, login = user.login;
        return { id: id, name: name, login: login };
    };
    /**
     * Function delet password
     * @param {object} user - user
     * @returns {string} - some paramets
     */
    User.ReqBody = function (user) {
        var name = user.name, login = user.login, password = user.password;
        return { name: name, login: login, password: password };
    };
    return User;
}());
/* module.exports = User; */
exports.default = { User: User };
