const { v4: uuidv4 } = require('uuid');
/**
 * This is class of user
 * @class
 */
class User {
  /**
   * 
   * @param {string} id - user's id 
   * @param {string} name - user's name  
   * @param {string} login - user's login 
   * @param {string} password - user's password
   */
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * 
   * @param {object} user - user  
   * @returns {string} - some parametrs
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
/**
 * Function delet password
 * @param {object} user - user
 * @returns {string} - some paramets
 */

  static ReqBody(user) {
    const { name, login, password } = user;
    return { name, login, password };
  }
}

module.exports = User;