'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentSchema = Schema({
  name: String,
  language: String,
  data: String
});

module.exports = mongoose.model('Content', ContentSchema);
