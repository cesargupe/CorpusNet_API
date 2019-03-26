'use strict'

var Datasheet = require('../models/datasheet');

function getDatasheet(req, res) {

  var name_content = req.params.name;
  var type_content = req.params.type;
  var language_content = req.params.language;

  console.log('\n********************')
  console.log(req.params);
  console.log('********************\n')


  if (!name_content || !type_content || !language_content) {
    // Si no especificas el contenido devuelve un error.
    res.status(500).send({message: 'No se ha especificado el contenido'});
  }else {
    // Sacar solo el contenido solicitado.
    Datasheet.findOne({'name': name_content, 'type': type_content, 'language': language_content}).sort({'_id': -1}).exec((err, datasheet) => {

      if (err) {
        res.status(500).send({message: 'Error en la peticion'});
      }else {
        if (!datasheet) {

          Datasheet.findOne({'name': name_content, 'type': type_content, 'language': 'en'}).sort({'_id': -1}).exec((err, datasheet) => {

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
  datasheet.language = params.language;
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

function updateDatasheet(req, res) {

  var datasheetId = req.params.id;
  var update = req.body;

  Datasheet.findByIdAndUpdate(datasheetId, update, (err, datasheetUpdated) => {

    if (err) {
      res.status(500).send({message: 'Error en el servidor'});
    }else {

      if (!datasheetUpdated) {
        res.status(404).send({message: 'No se ha podido actualizar la ficha tecnica'});
      }else {
        res.status(200).send({datasheet: datasheetUpdated});
      }

    }

  });

}

function updateDatasheetName(req, res) {

  var datasheetName = req.params.name;
  var datasheetType = req.params.type;
  var datasheetLanguage = req.params.language;
  var update = req.body;

  Datasheet.findOneAndUpdate({'name': datasheetName, 'type': datasheetType, 'language': datasheetLanguage}, {$set: update}, (err, datasheetUpdated) => {

    if (err) {
      res.status(500).send({message: 'Error en el servidor'});
    }else {

      if (!datasheetUpdated) {
        res.status(404).send({message: 'No se ha podido actualizar la ficha tecnica'});
      }else {
        res.status(200).send({datasheet: datasheetUpdated});
      }

    }

  });

}

function deleteDatasheet(req, res) {

  var datasheetName = req.params.name;
  var datasheetType = req.params.type;
  var datasheetLanguage = req.params.language;

  Datasheet.findOneAndRemove({'name': datasheetName, 'type': datasheetType, 'language': datasheetLanguage}, (err, datasheetRemoved) => {

    if (err) {
      res.status(500).send({message: 'Error en el servidor'});
    }else {

      if (!datasheetRemoved) {
        res.status(404).send({message: 'No se ha podido borrar el datasheet'});
      }else {
        res.status(200).send({datasheet: datasheetRemoved});
      }

    }

  });

}

module.exports = {
  getDatasheet,
  saveDatasheet,
  updateDatasheet,
  updateDatasheetName,
  deleteDatasheet
};
