const DBboard = require('./inMemoryBoard.js');

const getAllBoard = async () =>  
  // TODO: mock implementation. should be replaced during task development
  DBboard
;

const creat = async board =>  {
   DBboard.push(board);
    return board;     
}

const getById = async id => {
    const board = await  DBboard.filter(el => el.id === id )[0];
   
    if(!board){
      throw new Error (`The board with id: ${id} was not found`)
    }
    return board
   };

   const changeBoard = async (id, body) => {
    const board = await  DBboard.filter(el => el.id === id )[0];
   board.columns = body.columns;
   board.title = body.title
   /* board.title = body.title; */
    /* const changboard = Object.assign(board, body); */
    /* board.columns.push(body.columns[0]) */
   
     
   return board
   };


 const deleteById = async id => {
    const board = await  DBboard.filter(el => el.id === id )[0];
    const index = DBboard.indexOf(board); 
    DBboard.splice(index, 1);
    const message = ('The board has been deleted');
    return message; 
  }


module.exports = {getAllBoard, creat, getById , changeBoard, deleteById } ;