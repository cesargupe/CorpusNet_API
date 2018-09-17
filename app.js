'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar rutas
var content_routes = require('./routes/content');
var datasheet_routes = require('./routes/datasheet');
var notice_routes = require('./routes/notice');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras http
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');

    next();

});

// Carga de rutas base
app.use('/api', content_routes);
app.use('/api', datasheet_routes);
app.use('/api', notice_routes);

module.exports = app;
