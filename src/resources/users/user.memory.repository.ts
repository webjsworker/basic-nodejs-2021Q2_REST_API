const DBTASK = require('../tasks/tasks.memory.repository')

interface IUser {
  id : string,
  name: string,
  login:string,
  password:string
}
/**
 * Array of users
 * @type {Array}
 */
const DBUsers: Array<IUser> = [];

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
const getById = async (id:string) => {
  const user = await DBUsers.filter(us => us.id === id)
  return user[0]
}


/**
 * 
 * @param {object} user - user for create 
 * @returns {object} created user
 */
const creat = async (user:IUser) => {
  DBUsers.push(user) 
  /* DBUsers = [...DBUsers, user] */
  return user
}

/**
 * function delete user by id 
 * @param {string} id - id of user 
 *  
 */
const deleteById = async (id:string) => {
  await DBUsers.filter(el => el.id !== id)
  DBTASK.deleteUserTasks(id)
}

/**
 * Function chande user by id
 * @param {string} id - user id  
 * @param {object} user - user data  
 * @param {object} el - elemen og user
 * @returns {object} changed user
 */
const change = async (id:string, user:IUser) => {
  DBUsers.map(el => {
    if (el.id === id) {
      return {id, ...user};
    }
    return el
  })
  return getById(id)
}

export  { getAll, getById, creat, deleteById, change };
