const posts = require("express").Router();
const { getPosts, getUsersPosts, deletePost, editPost, createPost } = require("../Queries/post");
posts.get("/", getPosts);
posts.get("/:id", getUsersPosts);
posts.post("/", createPost);
posts.delete("/:id", deletePost);
posts.patch("/:id", editPost);
module.exports = posts;
module.exports = posts;