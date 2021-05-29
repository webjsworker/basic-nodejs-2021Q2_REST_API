"use strict";
const usersRepo = require('./user.memory.repository');
const User = require('./user.model');
/**
 * User controller - function retern all users
 * @returns {array} - array all users.
 */
const getAll = () => usersRepo.getAll();
/**
 * This function retern user by id
 * @param {string} id - user's id
 * @returns {object} - object of user
 */
const getById = id => usersRepo.getById(id);
/**
 * This function create new user
 * @param {object} user - object of user
 * @returns {object} - crated user
 */
const creat = user => usersRepo.creat(new User(user));
/**
 *
 * @param {string} id = user's id
 */
const deleteById = id => usersRepo.deleteById(id);
/**
 * This function change user's date
 * @param {string} id - user's id
 * @param {object} user - new user's date
 * @returns {object} - changed user
 */
const change = (id, user) => usersRepo.change(id, user);
module.exports = { getAll, getById, deleteById, creat, change };
