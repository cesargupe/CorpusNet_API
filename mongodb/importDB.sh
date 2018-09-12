#!/bin/bash
mongo corpusnet --eval 'db.contents.drop()'
mongoimport --db corpusnet --collection contents --file general.json --jsonArray
mongoimport --db corpusnet --collection contents --file inicio.json --jsonArray
mongoimport --db corpusnet --collection contents --file corpus-comparables.json --jsonArray
mongoimport --db corpusnet --collection contents --file corpus-paralelos.json --jsonArray
mongoimport --db corpusnet --collection contents --file herramientas-tagsets.json --jsonArray
mongoimport --db corpusnet --collection contents --file herramientas-tecnicas.json --jsonArray
mongoimport --db corpusnet --collection contents --file aplicaciones.json --jsonArray
mongoimport --db corpusnet --collection contents --file grupos.json --jsonArray
mongoimport --db corpusnet --collection contents --file noticias.json --jsonArray
npm start
