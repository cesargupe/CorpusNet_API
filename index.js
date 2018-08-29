'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/corpusnet', {useNewUrlParser: true}, (err, res) => {

  if (err) {
    console.log(err);
  } else {
    console.log("Se ha conectado con la base de datos.");

    app.listen(port, function () {
      console.log("Servidor del API REST de CorpusNet escuchando en http://localhost:" + port);
    })
  }

});
