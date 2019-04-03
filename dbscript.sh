#!/bin/bash
sed -i -e "s/10.6/$1/g" -e "s/dump.sql/$2/g" Dockerfile-pg

