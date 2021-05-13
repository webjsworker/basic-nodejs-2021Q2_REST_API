const DB = require('./inMemoryDb.js');

const getAll = async () =>  
  // TODO: mock implementation. should be replaced during task development
     DB
;

const getById = async id => DB.filter(el => el.id === id )[0];

const create = async user => {
 DB.push(user);
 return getById(user.id); 
} 

module.exports = { getAll, getById, create  };

