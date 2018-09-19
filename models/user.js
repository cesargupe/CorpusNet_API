'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  team: String,
  password: String,
  role: String
});

module.exports = mongoose.model('User', UserSchema);
