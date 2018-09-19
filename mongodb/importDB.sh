#!/bin/bash
mongo corpusnet --eval 'db.contents.drop()'
mongoimport --db corpusnet --collection contents --file db/general.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/inicio.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/corpus-comparables.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/corpus-paralelos.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/herramientas-tagsets.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/herramientas-tecnicas.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/aplicaciones.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/grupos.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/noticias.json --jsonArray
mongoimport --db corpusnet --collection contents --file db/acceso.json --jsonArray

mongo corpusnet --eval 'db.datasheets.drop()'
mongoimport --db corpusnet --collection datasheets --file db/datasheets.json --jsonArray

mongo corpusnet --eval 'db.notices.drop()'
mongoimport --db corpusnet --collection notices --file db/notices.json --jsonArray

mongo corpusnet --eval 'db.users.drop()'
mongoimport --db corpusnet --collection users --file db/users.json --jsonArray
