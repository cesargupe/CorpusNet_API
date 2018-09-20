'use strict'

var Notice = require('../models/notice');

function getNotices(req, res) {

  Notice.find({}).sort({'_id': -1}).exec((err, notices) => {

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

  var notice = new Notice();
  var params = req.body;

  console.log(params);

  notice.team = params.team;
  notice.text = params.text;

  if (params.link.split('://').length < 2) params.link = 'http://' + params.link;
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

function updateNotice(req, res) {

  var noticeId = req.params.id;
  var update = req.body;

  Notice.findByIdAndUpdate(noticeId, update, (err, noticeUpdated) => {

    if (err) {
      res.status(500).send({message: 'Error en el servidor'});
    }else {

      if (!noticeUpdated) {
        res.status(404).send({message: 'No se ha podido actualizar la noticia'});
      }else {
        res.status(200).send({song: noticeUpdated});
      }

    }

  });

}

function deleteNotice(req, res) {

  var noticeId = req.params.id;

  Notice.findByIdAndDelete(noticeId, (err, noticeRemoved) => {

    if (err) {
      res.status(500).send({message: 'Error en el servidor'});
    }else {

      if (!noticeRemoved) {
        res.status(404).send({message: 'No se ha podido borrar la noticia'});
      }else {
        res.status(200).send({song: noticeRemoved});
      }

    }

  });

}

module.exports = {
  getNotices,
  saveNotice,
  updateNotice,
  deleteNotice
};
