"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const User = require('./user.model.ts');
const usersService = require('./user.service.ts');
const request = express.Request;
const response = express.Response;
router.route('/').get(async (_req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
});
router.route('/:id').get(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    if (!user) {
        res.status(404).json();
    }
    res.status(200).send(User.toResponse(user));
});
router.route('/').post(async (req, res) => {
    const user = await usersService.creat(req.body);
    if (!user) {
        res.status(404).json();
    }
    res.status(201).send(User.toResponse(user));
});
router.route('/:id').put(async (req, res) => {
    const user = await usersService.change(req.params.id, req.body);
    if (!user) {
        res.status(404).json();
    }
    res.status(200).send(User.toResponse(user));
});
router.route('/:id').delete(async (req, res) => {
    const user = await usersService.deleteById(req.params.id);
    if (!user) {
        res.status(404).json();
    }
    res.status(200).send("Delete is done");
});
module.exports = router;
