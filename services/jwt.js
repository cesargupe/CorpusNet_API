'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');

var secret = 'aed085f52d361348612b5c27cd82925f'

exports.createToken = function(user){

  var payload = {
    sub: user._id,
    team: user.team,
    acronym: user.acronym,
    place: user.place,
    master: user.master,
    role: user.role,
    iat: moment().valueOf(),
    exp: moment().add(10, 'days').valueOf()
  };

  return jwt.encode(payload, secret);

};
