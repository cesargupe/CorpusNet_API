'use strict'

var express = require('express');
var DatasheetController = require('../controllers/datasheet');
var md_auth = require('../middlewares/auth');

var api = express.Router();

api.get('/datasheet/:name/:type', DatasheetController.getDatasheet);
api.post('/datasheet', md_auth.ensureAuth, DatasheetController.saveDatasheet);
api.put('/datasheet/:id', md_auth.ensureAuth, DatasheetController.updateDatasheet);

module.exports = api;
