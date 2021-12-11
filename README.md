# Outil-de-gestion-des-documents
=======
# Welcome to Talan document Bundle
this Bundle is designed to create and manage documents for almost use cases 

## Features

- 
- 
- 
- 
- 

# Building the Docker Images
1. Open terminal in the project directory.
2. Run the following command: 
```
docker-compose -f docker/basic-docker-compose.yml up --build

```

This command will create 3 containers :
1.	**[nginx] (port :8080)** it is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server that we will use it to host our web-service
2.	**[php] (port :9002)**  it will contain all depencies to run symfony 
3.	**[mysql] (port :3306)**   it will provide us with mysql database instance that allready containe required tabeles and testing data

# verifying created container
to verify that all needed container worked successfuly run
``` 
docker ps

```
the result must be :
```
IMAGE                                   COMMAND                          STATUS              PORTS                           NAMES
docker_nginx                            "/docker-entrypoint.…"           Up 18 seconds       0.0.0.0:8080->80/tcp            docker_nginx_1
docker_db                               "docker-entrypoint.s…"           Up 21 seconds       0.0.0.0:3306->5432/tcp          docker_db_1
docker_php                              "docker-php-entrypoi…"           Up 21 seconds       0.0.0.0:9002->9000/tcp          docker_php_1


```
# elastic search 

in vendor/elasticsearch/elasticsearch/src/Elasticsearch/Endpoints/Ingest/Pipeline/Put.php line 21 
change setBody(string $body) ===> setBody(array $body)