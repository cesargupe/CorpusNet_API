'use strict'

var express = require('express');
var ContentControler = require('../controllers/content');

var api = express.Router();

api.get('/content/:name', ContentControler.getContent);
api.post('/content/', ContentControler.saveContent);

module.exports = api;
