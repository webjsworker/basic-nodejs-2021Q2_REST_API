"use strict";
const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');
router.route('/').get(async (req, res) => {
    const boards = await boardsService.getAll();
    await res.json(boards.map(Board.toResponse));
});
router.route('/:id').get(async (req, res) => {
    const board = await boardsService.getById(req.params.id);
    if (!board) {
        res.status(404).json();
    }
    res.status(200).send(board);
});
router.route('/:id').delete(async (req, res) => {
    await boardsService.deleteById(req.params.id);
    res.sendStatus(200);
});
router.route('/').post(async (req, res) => {
    const board = await boardsService.creat(req.body);
    res.status(201).send(board);
});
router.route('/:id').put(async (req, res) => {
    const board = await boardsService.change(req.params.id, req.body);
    res.status(200).send(board);
});
module.exports = router;
