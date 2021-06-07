export {}
const express = require('express')

const router = express.Router();
const boardsService = require('./boards.service.ts');

const request = express.Request
const response = express.Response


router.route('/').get(async (_req: typeof request, res: typeof response): Promise<void> => {
  const boards = await boardsService.getAll();
  await res.json(boards);
});

router.route('/:id').get(async (req: typeof request, res: typeof response): Promise<void> => {
  const board = await boardsService.getById(req.params.id);
  if(!board) { res.status(404).json() }
  res.status(200).send(board);
});

router.route('/').post(async (req: typeof request, res: typeof response): Promise<void> => {
  const board = await boardsService.create(req.body);
  if(!board) { res.status(404).json() }
  res.status(201).send(board);
});

router.route('/:id').put(async (req: typeof request, res: typeof response): Promise<void> => {
  const board = await boardsService.change(
    req.params.id,
    req.body
  );
  if(!board) { res.status(404).json() }
  res.status(200).send(board);
});

router.route('/:id').delete(async (req: typeof request, res: typeof response) => {
  const board = await boardsService.deleteById(req.params.id);
  if(!board) { res.status(404).json() }
  res.status(200).send("Delete was finish");
});

module.exports = router;
