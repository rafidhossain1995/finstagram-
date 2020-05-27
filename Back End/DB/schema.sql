DROP DATABASE IF EXISTS instagram_db;
CREATE DATABASE instagram_db;

\c instagram_db;

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users; 

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    fullname text NOT NULL, 
    username TEXT NOT NULL UNIQUE,
    password VARCHAR, 
    email VARCHAR,
    user_pic VARCHAR

);

CREATE TABLE posts(
id SERIAL PRIMARY KEY,
user_id VARCHAR REFERENCES users(id),
pictures VARCHAR,
captions VARCHAR
);

