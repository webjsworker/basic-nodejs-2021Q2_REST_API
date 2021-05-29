"use strict";
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
// get all USers
router.route('/').get(async (req, res) => {
    const users = await usersService.getAll();
    await res.json(users.map(User.toResponse));
});
// Get user by Id 
router.route('/:id').get(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    if (!user) {
        res.status(404);
    }
    res.status(200).send(User.toResponse(user));
});
// Delet user by Id
router.route('/:id').delete(async (req, res) => {
    await usersService.deleteById(req.params.id);
    res.sendStatus(200);
});
/// create new user
router.route('/').post(async (req, res) => {
    const user = await usersService.creat(User.ReqBody(req.body));
    res.status(201).send(User.toResponse(user));
});
router.route('/:id').put(async (req, res) => {
    const user = await usersService.change(req.params.id, User.ReqBody(req.body));
    if (!user) {
        res.status(404);
    }
    res.status(200).send(User.toResponse(user));
});
module.exports = router;
