const router = require('express').Router();
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
    res.status(201).json(board);
  });


  router.route('/:id').get(async (req, res) => {
    const board = await boardService.getById(req.params.id);
    res.json(board);
  });

  router.route('/:id').put(async (req, res) => {
     const board = await boardService.changeBoard(req.params.id, req.body);
      res.json(board);
     });

     /* router.route('/:id').delete(async (req, res) => {
        const board  = await boardService.deleteById(req.params.id);
         
          res.json(board);
        }); */

module.exports = router;