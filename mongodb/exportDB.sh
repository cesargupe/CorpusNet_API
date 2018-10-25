#!/bin/bash

query="{name:'general'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/general.json --query "$query"
query="{name:'inicio'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/inicio.json --query "$query"
query="{name:'corpus-comparables'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/corpus-comparables.json --query "$query"
query="{name:'corpus-paralelos'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/corpus-paralelos.json --query "$query"
query="{name:'herramientas-tagsets'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/herramientas-tagsets.json --query "$query"
query="{name:'herramientas-tecnicas'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/herramientas-tecnicas.json --query "$query"
query="{name:'aplicaciones'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/aplicaciones.json --query "$query"
query="{name:'bases-datos'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/bases-datos.json --query "$query"
query="{name:'grupos'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/grupos.json --query "$query"
query="{name:'noticias'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/noticias.json --query "$query"
query="{name:'acceso'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/acceso.json --query "$query"
query="{name:'ficha-tecnica'}";
mongoexport --db corpusnet --collection contents --jsonArray --pretty --out db/ficha-tecnica.json --query "$query"

query="{}";
mongoexport --db corpusnet --collection datasheets --jsonArray --pretty --out db/datasheets.json --query "$query"
mongoexport --db corpusnet --collection notices --jsonArray --pretty --out db/notices.json --query "$query"
mongoexport --db corpusnet --collection users --jsonArray --pretty --out db/users.json --query "$query"
