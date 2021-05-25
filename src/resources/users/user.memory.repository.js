const DBTASK = require('../tasks/tasks.memory.repository')

/**
 * Array of users
 * @type {Array}
 */
let DBUsers = []

/**
 * Function getAll users
 * @returns array of users.
 */
const getAll = () => DBUsers;

/**
 * 
 * @param {string} id - id of user
 * @returns {object} - user
 */
const getById = async id => {
  const user = await DBUsers.filter(us => us.id === id)
  return user[0]
}

/**
 * 
 * @param {object} user - user for create 
 * @returns {object} created user
 */
const creat = async user => {
  DBUsers = [...DBUsers, user]
  return user
}

/**
 * function delete user by id 
 * @param {string} id - id of user 
 *  
 */
const deleteById = async id => {
  DBUsers = await DBUsers.filter(el => el.id !== id)
  DBTASK.deleteUserTasks(id)
}

/**
 * Function chande user by id
 * @param {string} id - user id  
 * @param {object} user - user data  
 * @returns {object} changed user
 */
const change = async (id, user) => {
  DBUsers = DBUsers.map(el => {
    if (el.id === id) {
      return {id, ...user};
    }
    return el
  })
  return getById(id)
}

module.exports = { getAll, getById, creat, deleteById, change };
