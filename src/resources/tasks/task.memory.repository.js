const DBTasks = require('./inMemoryTasks');

const getAlltask = async () =>  
  DBTasks;
  
  /* {
    id = "string",
    title =  "string",
    order =  0,
    description = "string",
    userId =  "string"
  } */



module.exports = { getAlltask  };