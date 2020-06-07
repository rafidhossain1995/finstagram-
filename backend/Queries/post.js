const db = require("../DB/index");
const upload = require("./imageUploader")
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
      "SELECT * FROM posts WHERE user_id=$1",
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
  try{
    upload(req, res, err=>{
      try{
        const {user_id, content} = req.body
        let pictures = '/uploads/' + req.file.filename
        db.one(`INSERT INTO posts (user_id, pictures, content) VALUES($1, $2, $3) RETURNING *`, [user_id, pictures, content])
        .then(done=>{
          console.log('then');
          res.status(200).json({
            status:'success',
            post: done,
            message: 'created new photo'
          })
        })
      }catch(err){
        console.log(err)
        next(err)
      }
    })
  }catch(err){
    console.log(err)
     next(err)
  }

  
}
module.exports = { getPosts, getUsersPosts, deletePost, editPost, createPost };
