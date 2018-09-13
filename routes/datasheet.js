'use strict'

var express = require('express');
var DatasheetController = require('../controllers/datasheet');

var api = express.Router();

api.get('/datasheet/:name/:type', DatasheetController.getDatasheet);
api.post('/datasheet/', DatasheetController.saveDatasheet);

module.exports = api;
