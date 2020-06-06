DROP DATABASE IF EXISTS instagram_db;
CREATE DATABASE instagram_db;

\c instagram_db;

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users; 

CREATE TABLE users(
id VARCHAR PRIMARY KEY,
email VARCHAR,
username VARCHAR,
password VARCHAR
);

CREATE TABLE posts(
id SERIAL PRIMARY KEY,
user_id VARCHAR REFERENCES users(id),
pictures VARCHAR
-- captions VARCHAR
);

