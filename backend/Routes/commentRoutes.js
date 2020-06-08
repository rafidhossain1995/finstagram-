const comments = require("express").Router();

const {addComment, getAllComments } = require("../Queries/comments");

comments.post("/comments/:post_id/:commenters_id", addComment)
comments.get("/comments/:post_id/", getAllComments)

module.exports = comments