CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devoured boolean NOT NULL,
date TIMESTAMP,
PRIMARY KEY (id)
);