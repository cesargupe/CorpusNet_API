'use strict'

var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var User = require('../models/user');

function loginUser(req, res) {

  var params = req.body;

  User.findOne({'email': params.email.toLowerCase()}).sort({'_id': -1}).exec((err, user) => {

    if (err) {
      res.status(500).send({message: 'Error en la peticion'});
    }else {
      if (!user) {
        res.status(404).send({message: 'El usuario no existe'});
      }else {

        bcrypt.compare(params.password, user.password, function(err, check) {

          if (check) {
            res.status(200).send({
              user: {'_id': user._id, 'name': user.name, 'email': user.email, 'role': user.role},
              token: jwt.createToken(user)
            });
          }else {
            res.status(404).send({message: 'La contraseña introducida es incorrecta'});
          }

        });

      }
    }

  });

}

function saveUser(req, res) {

  var user = new User();
  var params = req.body;

  console.log(params);

  user.name = params.name;
  user.email = params.email;
  user.role = 'ROLE_USER';

  if (params.password) {
    bcrypt.hash(params.password, null, null, function(err, hash) {

      user.password = hash;

      user.save((err, userStored) => {

        if (err) {
          res.status(500).send({message: 'Error al guardar el usuario'});
        } else {
          if (!userStored) {
            res.status(404).send({message: 'El usuario no ha sido guardado'});
          }else {
            res.status(200).send({user: userStored});
          }
        }

      });

    });
  }else {
    res.status(500).send({message: 'Introduce la contraseña'});
  }

}

module.exports = {
  loginUser,
  saveUser
};
