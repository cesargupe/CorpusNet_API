'use strict'

var Notices = require('../models/notice');

function getNotices(req, res) {

  Notices.find({}).sort({'_id': -1}).exec((err, notices) => {

    if (err) {
      res.status(500).send({message: 'Error en la peticion'});
    }else {
      if (!notices) {
        res.status(404).send({message: 'No hay noticias'});
      }else {
        res.status(200).send({notices});
      }
    }

  });

}

function saveNotice(req, res) {

  var notice = new Datasheet();
  var params = req.body;

  console.log(params);

  notice.team = params.team;
  notice.text = params.text;
  notice.link = params.link;

  notice.save((err, noticeStored) => {

    if (err) {
      res.status(500).send({message: 'Error al guardar la noticia'});
    } else {
      if (!noticeStored) {
        res.status(404).send({message: 'La noticia no ha sido guardada'});
      }else {
        res.status(200).send({notice: noticeStored});
      }
    }

  });

}

module.exports = {
  getNotices,
  saveNotice
};
