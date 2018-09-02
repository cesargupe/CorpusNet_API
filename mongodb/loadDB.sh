#!/bin/bash
mongo corpusnet --eval 'db.contents.drop()'
mongoimport --db corpusnet --collection contents --file general.json --jsonArray
mongoimport --db corpusnet --collection contents --file inicio.json --jsonArray
