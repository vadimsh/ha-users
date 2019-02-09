#!/bin/sh

POSTGRES_USER=$(cat .env | grep DB_USER | cut -d = -f 2)
POSTGRES_PASSWORD=$(cat .env | grep DB_PASSWORD | cut -d = -f 2)
POSTGRES_DB=$(cat .env | grep DB_DATABASE | cut -d = -f 2)

echo $POSTGRES_DB:$POSTGRES_USER:$POSTGRES_PASSWORD

docker run --name ha-pg -p 5432:5432 -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -e POSTGRES_USER=${POSTGRES_USER} -e POSTGRES_DB=${POSTGRES_DB} -v ${PWD}/scripts/dump.sql:/tmp/dump.sql --rm -d postgres:10.6-alpine
