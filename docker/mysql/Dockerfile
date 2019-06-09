FROM mysql:8.0.14

RUN echo [mysqld] >> /etc/mysql/my.cnf &&\
    echo default-authentication-plugin=mysql_native_password >> /etc/mysql/my.cnf &&\
    echo character-set-server = utf8 >> /etc/mysql/my.cnf

EXPOSE 3306