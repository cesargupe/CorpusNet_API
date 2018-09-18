'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../middlewares/auth');

var api = express.Router();

api.post('/new_user', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;
