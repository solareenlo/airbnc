USE dev;

CREATE user 'dev'@'localhost' identified BY 'password';

GRANT ALL PRIVILEGES ON *.* TO 'dev'@'localhost';
