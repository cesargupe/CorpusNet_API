'use strict'

var Datasheet = require('../models/datasheet');

function getDatasheet(req, res) {

  var name_content = req.params.name;
  var type_content = req.params.type;

  console.log(req.params);


  if (!name_content || !type_content) {
    // Si no especificas el contenido devuelve un error.
    res.status(500).send({message: 'No se ha especificado el contenido'});
  }else {
    // Sacar solo el contenido solicitado.
    Datasheet.findOne({'name': name_content, 'type': type_content}).sort({'_id': -1}).exec((err, datasheet) => {

      if (err) {
        res.status(500).send({message: 'Error en la peticion'});
      }else {
        if (!datasheet) {
          res.status(404).send({message: 'Esta ficha no existe no existe'});
        }else {
          res.status(200).send({datasheet});
        }
      }

    });
  }

}

function saveDatasheet(req, res) {

  var datasheet = new Datasheet();
  var params = req.body;

  datasheet.name = params.name;
  datasheet.type = params.type;
  datasheet.data = params.data;

  datasheet.save((err, datasheetStored) => {

    if (err) {
      res.status(500).send({message: 'Error al guardar la ficha'});
    } else {
      if (!datasheetStored) {
        res.status(404).send({message: 'La ficha no ha sido guardada'});
      }else {
        res.status(200).send({datasheet: datasheetStored});
      }
    }

  });

}

module.exports = {
  getDatasheet,
  saveDatasheet
};
