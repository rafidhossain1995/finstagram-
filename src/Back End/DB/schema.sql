DROP DATABASE IF EXISTS instagram_db;
CREATE DATABASE instagram_db;

\c instagram_db;

DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user;

CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    firstName text NOT NULL,
    lastName text NOT NULL, 
    userName TEXT NOT NULL UNIQUE,
    password VARCHAR, 
    email VARCHAR,
    user_pic VARCHAR
);

CREATE TABLE post(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
pictures VARCHAR,
captions VARCHAR
);