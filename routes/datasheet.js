'use strict'

var express = require('express');
var DatasheetController = require('../controllers/datasheet');
var md_auth = require('../middlewares/auth');

var api = express.Router();

api.get('/datasheet/:name/:type', DatasheetController.getDatasheet);
api.post('/datasheet', md_auth.ensureAuth, DatasheetController.saveDatasheet);
api.put('/datasheet/:id', md_auth.ensureAuth, DatasheetController.updateDatasheet);
api.put('/datasheet_name/:name/:type', md_auth.ensureAuth, DatasheetController.updateDatasheetName);
api.delete('/datasheet/:name/:type', md_auth.ensureAuth, DatasheetController.deleteDatasheet);

module.exports = api;
