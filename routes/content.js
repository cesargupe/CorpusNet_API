'use strict'

var express = require('express');
var ContentControler = require('../controllers/content');
var md_auth = require('../middlewares/auth');

var api = express.Router();

api.get('/content/:name/:language', ContentControler.getContent);
api.get('/content/:name/', ContentControler.getContent);
//api.get('/content/:name/', md_auth.ensureAuth, ContentControler.getContent);

api.post('/content/', ContentControler.saveContent);

module.exports = api;
