FROM mysql:8.0.17
ENV MYSQL_ROOT_PASSWORD docb_psw
ENV MYSQL_USER docb_user
ENV MYSQL_PASSWORD docb_psw
ENV MYSQL_DATABASE testdb
COPY ./data/01-init.sql /docker-entrypoint-initdb.d
COPY ./data/100-fixtures.sql /docker-entrypoint-initdb.d