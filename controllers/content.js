'use strict'

var Content = require('../models/content');

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

function saveContent(req, res) {

  var content = new Content();
  var params = req.body;

  console.log(params);

  content.name = params.name;
  content.language = params.language;
  content.data = params.data;

  content.save((err, contentStored) => {

    if (err) {
      res.status(500).send({message: 'Error al guardar el contenido'});
    } else {
      if (!contentStored) {
        res.status(404).send({message: 'El contenido no ha sido guardado'});
      }else {
        res.status(200).send({content: contentStored});
      }
    }

  });

}

module.exports = {
  getContent,
  saveContent
};
