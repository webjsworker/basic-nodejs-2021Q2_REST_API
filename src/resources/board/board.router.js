const router = require('express').Router();
/* const User = require('./user.model'); */
const Board = require('./board.model')
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoard();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
    const board = await boardService.creat(
      new Board ({
        title: req.body.title,
        columns: req.body.columns,
        
      })
    );
    res.json(board);
  });


  router.route('/:id').get(async (req, res) => {
    const board = await boardService.getById(req.params.id);
    res.json(board);
  });

  router.route('/:id').put(async (req, res) => {
    /* const board = await boardService.changeBoard(req.params.id, req.body); */
    const board = await boardService.getById(req.params.id);
    res.json(board);
     });

     router.route('/:id').delete(async (req, res) => {
        const message  = await boardService.deleteById(req.params.id);
         
          res.send(message);
        });

module.exports = router;