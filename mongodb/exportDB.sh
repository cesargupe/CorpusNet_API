#!/bin/bash
mongoexport --db corpusnet --collection contents --out general.json --jsonArray
mongoexport --db corpusnet --collection contents --out inicio.json --jsonArray
