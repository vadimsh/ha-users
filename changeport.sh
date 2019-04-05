#!/bin/bash
sed -i -e "s/PORT=3000/PORT=$1/g" .env

