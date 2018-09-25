'use strict'

var Content = require('../models/content');

function getAllContent(req, res) {

  Content.find({}).sort({'_id': -1}).exec((err, allContent) => {

    if (err) {
      res.status(500).send({message: 'Error en la peticion'});
    }else {
      if (!allContent) {
        res.status(404).send({message: 'No hay contenido'});
      }else {
        res.status(200).send({allContent});
      }
    }

  });

}

function getContent(req, res) {

  var name_content = req.params.name;
  var language_content = req.params.language;

  if (!language_content) language_content = 'es'

  console.log(req.params);


  if (!name_content) {
    // Si no especificas el contenido devuelve un error.
    res.status(500).send({message: 'No se ha especificado el contenido'});
  }else {
    // Sacar solo el contenido solicitado.
    Content.findOne({'name': name_content, 'language': language_content}).sort({'_id': -1}).exec((err, content) => {

      if (err) {
        res.status(500).send({message: 'Error en la peticion'});
      }else {
        if (!content) {
          res.status(404).send({message: 'El contenido no existe'});
        }else {
          res.status(200).send({content});
        }
      }

    });
  }

}

function getContentDatasheet(req, res) {

  var type_content = req.params.type;

  console.log(req.params);

  Content.findOne({'name': 'ficha-tecnica', 'type': type_content}).sort({'_id': -1}).exec((err, content) => {

    if (err) {
      res.status(500).send({message: 'Error en la peticion'});
    }else {
      if (!content) {
        res.status(404).send({message: 'El contenido no existe'});
      }else {
        res.status(200).send({content});
      }
    }

  });

}

function updateContent(req, res) {

  var contentId = req.params.id;
  var update = req.body;

  Content.findByIdAndUpdate(contentId, update, (err, contentUpdated) => {

    if (err) {
      res.status(500).send({message: 'Error en el servidor'});
    }else {

      if (!contentUpdated) {
        res.status(404).send({message: 'No se ha podido actualizar el contenido'});
      }else {
        res.status(200).send({song: contentUpdated});
      }

    }

  });

}

function deleteContent(req, res) {

  var contentId = req.params.id;

  Content.findByIdAndDelete(contentId, (err, contentRemoved) => {

    if (err) {
      res.status(500).send({message: 'Error en el servidor'});
    }else {

      if (!contentRemoved) {
        res.status(404).send({message: 'No se ha podido eliminar el contenido'});
      }else {
        res.status(200).send({song: contentRemoved});
      }

    }

  });

}


module.exports = {
  getAllContent,
  getContent,
  getContentDatasheet,
  updateContent,
  deleteContent
};
