USE dev
DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(32) CHARACTER SET utf8 NOT NULL,
  description TEXT(65535) CHARACTER SET utf8,
  fee INT(10) UNSIGNED NOT NULL,
  owner BIGINT UNSIGNED NOT NULL,
  contract_id VARCHAR(32) NOT NULL,
  updated_at TIMESTAMP NOT NULL default current_timestamp on update current_timestamp,
  created_at TIMESTAMP NOT NULL default current_timestamp
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(32) CHARACTER SET utf8 NOT NULL,
  description TEXT(65535) CHARACTER SET utf8,
  password VARCHAR(32) CHARACTER SET utf8 NOT NULL,
  mail VARCHAR(32) CHARACTER SET utf8 NOT NULL,
  account_adress VARCHAR(32) CHARACTER SET utf8 NOT NULL,
  updated_at TIMESTAMP NOT NULL default current_timestamp on update current_timestamp,
  created_at TIMESTAMP NOT NULL default current_timestamp
);
