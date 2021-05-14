const DB = require('./inMemoryDb.js');

const getAll = async () =>  
  // TODO: mock implementation. should be replaced during task development
     DB
;

const getById = async id => {
 const user = await  DB.filter(el => el.id === id )[0];

 if(!user){
   throw new Error (`The user with id: ${id} was not found`)
 }
 return user
};

const create = async user => {
 DB.push(user);
 return getById(user.id); 
} 

const deleteById = async id => {
  const user = await  DB.filter(el => el.id === id )[0];
  const index = DB.indexOf(user); 
  DB.splice(index, 1);
  const message = ('The user has been deleted');
  return message; 
}

const ChangeUser = async (id, body) => {
   const user = await  DB.filter(el => el.id === id )[0];
  const changeUser = Object.assign(user, body);
  
  return changeUser
}




module.exports = { getAll, getById, create, deleteById, ChangeUser  };

