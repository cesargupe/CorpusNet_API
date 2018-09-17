'use strict'

var express = require('express');
var NoticeController = require('../controllers/notice');

var api = express.Router();

api.get('/notices/', NoticeController.getNotices);
api.post('/datasheet/', NoticeController.saveNotice);

module.exports = api;
