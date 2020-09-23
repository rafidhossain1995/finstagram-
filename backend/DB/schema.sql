DROP DATABASE IF EXISTS instagram_db;
CREATE DATABASE instagram_db;

\c instagram_db;

DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users; 


CREATE TABLE users(
id VARCHAR PRIMARY KEY,
email VARCHAR,
username VARCHAR,
profile_pic VARCHAR
);

CREATE TABLE posts(
id SERIAL PRIMARY KEY,
user_id VARCHAR REFERENCES users(id),
pictures VARCHAR,
content VARCHAR
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
commenters_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
post_id INT REFERENCES posts(id) ON DELETE CASCADE,
content TEXT,
time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE profile_pic(
-- id SERIAL PRIMARY KEY,
-- users_profile_pic_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
-- profile_picture VARCHAR,
-- time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );

INSERT INTO users
(id, email, username, profile_pic)
VALUES
('pJ9i7hRlqfbcWeT69H4e1q2VQfI2', 'rafffidhos@yahoo.com', 'kobefan', 'uploads/kobe.jpg'),
('pJ9i9hRlqfbcWeT69H4e1q2VQfI2', 'septemberhos@yahoo.com', 'rafid12', 'uploads/IMAGE-1600740473621.jpg'),
('pJ9i2hRlqfbcWeT69H4e1q2VQfI2', 'greg@yahoo.com', 'greg', 'uploads/IMAGE-1600740473621.jpg'),
('pJ9i1hRlqfbcWeT69H4e1q2VQfI2', 'sarah@yahoo.com', 'sarah', 'uploads/IMAGE-1600740473621.jpg');

INSERT INTO POSTS
(id, user_id, pictures, content)
VALUES('1', 'pJ9i7hRlqfbcWeT69H4e1q2VQfI2', '/uploads/harry.jpeg', 'Wow I am getting old'),
('2', 'pJ9i9hRlqfbcWeT69H4e1q2VQfI2', '/uploads/doug.jpg', 'Smile squad!'),
('3', 'pJ9i2hRlqfbcWeT69H4e1q2VQfI2', '/uploads/rafid.png', 'This is so awesome'),
('4', 'pJ9i1hRlqfbcWeT69H4e1q2VQfI2', '/uploads/randon.png', 'great app!');
