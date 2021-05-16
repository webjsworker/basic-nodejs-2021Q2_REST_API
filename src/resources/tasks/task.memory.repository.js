const DBTasks = require('./inMemoryTasks');

const getAlltask = async () =>  DBTasks;

const create = async (task) => {
  DBTasks.push(task)
  return task;
};
  
const getById = async (id) => {
  const task = await  DBTasks.filter(el => el.id === id )[0];
return task
};
  
/* const changetask = async (taskid, body) => {
  const task = await  DBTasks.filter(el => el.id === taskid )[0];
  const changetask = Object.assign(task, body);
  
  return changetask
} */
 



module.exports = { getAlltask, create, getById,     };