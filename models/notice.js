'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticeSchema = Schema({
  team: String,
  text: String,
  link: String,
  created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Notice', NoticeSchema);
