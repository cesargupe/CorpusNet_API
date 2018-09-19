'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../middlewares/auth');

var api = express.Router();

api.post('/login', UserController.loginUser);
api.get('/users', md_auth.ensureAuth, UserController.getUsers);
api.post('/new_user', md_auth.ensureAuth, UserController.saveUser);

module.exports = api;
