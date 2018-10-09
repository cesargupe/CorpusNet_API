'use strict'

var express = require('express');
var NoticeController = require('../controllers/notice');
var md_auth = require('../middlewares/auth');

var api = express.Router();

api.get('/notices', NoticeController.getNotices);
api.get('/last-notice', NoticeController.getLastNotice);
api.post('/notice', md_auth.ensureAuth, NoticeController.saveNotice);
api.put('/notice/:id', md_auth.ensureAuth, NoticeController.updateNotice);
api.delete('/notice/:id', md_auth.ensureAuth, NoticeController.deleteNotice);

module.exports = api;
