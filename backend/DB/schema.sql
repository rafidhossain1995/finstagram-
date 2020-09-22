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
('pJ9i7hRlqfbcWeT69H4e1q2VQfI2', 'rafffidhos@yahoo.com', 'raffid12', 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-auth.appspot.com/o/image%2Frafid.png?alt=media&token=ada248b9-7c95-433d-a987-c3489f7b0e1f'),
('pJ9i9hRlqfbcWeT69H4e1q2VQfI2', 'septemberhos@yahoo.com', 'safid12', 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-auth.appspot.com/o/image%2Frafid.png?alt=media&token=ada248b9-7c95-433d-a987-c3489f7b0e1f'),
('pJ9i2hRlqfbcWeT69H4e1q2VQfI2', 'rafffidhos@yahoo.com', 'raffid12', 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-auth.appspot.com/o/image%2Frafid.png?alt=media&token=ada248b9-7c95-433d-a987-c3489f7b0e1f'),
('pJ9i1hRlqfbcWeT69H4e1q2VQfI2', 'rafffidhos@yahoo.com', 'raffid12', 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-auth.appspot.com/o/image%2Frafid.png?alt=media&token=ada248b9-7c95-433d-a987-c3489f7b0e1f');

INSERT INTO POSTS
(id, user_id, pictures, content)
VALUES('1', 'pJ9i7hRlqfbcWeT69H4e1q2VQfI2', '/uploads/IMAGE-1600740473621.jpg', 'hey look at my content'),
('2', 'pJ9i9hRlqfbcWeT69H4e1q2VQfI2', '/uploads/IMAGE-1600741009961.jpg', 'Smile squad!'),
('3', 'pJ9i2hRlqfbcWeT69H4e1q2VQfI2', '/uploads/IMAGE-1600740473621.jpg', 'This is so awesome'),
('4', 'pJ9i1hRlqfbcWeT69H4e1q2VQfI2', '/uploads/IMAGE-1600740473621.jpg', 'great app!');
