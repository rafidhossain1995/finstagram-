const comments = require("express").Router();
const {checkFirebaseToken} = require("../middleware/auth")

const {addComment, getAllComments } = require("../Queries/comments");

comments.post("/:post_id", checkFirebaseToken, addComment)
comments.get("/:post_id", getAllComments)

module.exports = comments