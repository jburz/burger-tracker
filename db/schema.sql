-- Drop and create database if it exists
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burger_db;

-- USE database and create table
USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (60),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);