const db = require("../DB/index");


const addComment = async (req, res, next) => {
    try {
      let { post_id, commenter_id } = req.params;
      let { content } = req.body;
      let comment = await db.one(
        "INSERT INTO comments (post_id, commenters_id, content) VALUES ($1, $2, $3) RETURNING *",
        [post_id, commenters_id, content]
      );
      res.status(200).json({
        status: "Success",
        message: "Comment Added",
        body: {
          comment
        },
      });
    } catch (error) {
      res.json({
        error: error,
      });
    }
  };

  const getAllComments = async (req, res, next) => {
    try {
      const { post_id } = req.params;
      res.status(200).json({
        status: "Success",
        message: `Comments Retrieved ${post_id}`,
        body: {
          comments: await db.any(
            "SELECT comments.id, post_id, commenters_id, content, username FROM comments INNER JOIN users ON users.id = comments.commenters_id WHERE post_id = $1",
            post_id
          ),
        },
      });
    } catch (error) {
      res.json({
        error: error,
      });
    }
  };

  module.exports = { addComment, getAllComments };