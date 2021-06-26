/* const usersRepo = require('./user.memory.repository'); */
import {getAll,getById, creat, deleteById,change} from './user.memory.repository';


module.exports = { getAll, getById, deleteById, creat, change};
