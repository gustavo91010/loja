#!/bin/bash

docker rm loja_pgadmin_1

docker rm loja_postgres_1

docker-compose up -d
