'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentSchema = Schema({
  name: String,
  language: String,
  data: Object
});

module.exports = mongoose.model('Content', ContentSchema);
