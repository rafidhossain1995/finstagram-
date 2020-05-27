const db = require("../DB/index");
const getPosts = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT * FROM posts ORDER BY id DESC");
    res.status(200).json({
      status: "success",
      message: "all users posts",
      payload: posts,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err,
    });
    next();
  }
};
const getUsersPosts = async (req, res, next) => {
  try {
    let posts = await db.any(
      "SELECT * FROM posts WHERE user_id=$1 ORDER BY id DESC",
      req.params.id
    );
    res.status(200).json({
      status: "success",
      message: "all users posts",
      payload: posts,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err,
    });
    next();
  }
};
const deletePost = async (req, res, next) => {
  try {
    let { postId } = req.params.id;
    let post = ("DELETE FROM posts WHERE id=$1 RETURNING *", postId);
    res.status(200).json({
      status: "success",
      message: "all users posts",
      payload: post,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err,
    });
    next();
  }
};
const editPost = async (req, res, next) => {
  try {
    let { pictures, caption } = req.body;
    let { userId } = req.params;
    let post = await db.one(
      "UPDATE posts SET pictures=$1, caption=$2  WHERE =$3",
      [pictures, caption, userId]
    );
    res.status(200).json({
      status: "success",
      message: "all users posts",
      payload: post,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err,
    });
    next();
  }
};
const createPost = async (req, res, next) => {
  try {
    let post = await db.one(`
            INSERT INTO posts (user_id, pictures, captions) VALUES('${req.body.user_id}', '${req.body.pictures}', '${req.body.captions}') RETURNING *`);
    res.status(200).json({
      status: "success",
      message: "created a new post",
      payload: post,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err,
    });
    next();
  }
};
module.exports = { getPosts, getUsersPosts, deletePost, editPost, createPost };
