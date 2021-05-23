// const User = require('./user.model')
const DBTASK = require('../tasks/tasks.memory.repository')
/* const DBUsers = require('./inMemoryUser') */

let DBUsers = []

const getAll = () => DBUsers;

const getById = async id => {
  const user = await DBUsers.filter(us => us.id === id)
  return user[0]
}

const creat = async user => {
  DBUsers = [...DBUsers, user]
  return user
}

const deleteById = async id => {
  DBUsers = await DBUsers.filter(us => us.id !== id)
  DBTASK.deleteUserTasks(id)
}

const change = async (id, user) => {
  DBUsers = DBUsers.map(o => {
    if (o.id === id) {
      return {id, ...user};
    }
    return o
  })
  return getById(id)
}

module.exports = { getAll, getById, creat, deleteById, change };
