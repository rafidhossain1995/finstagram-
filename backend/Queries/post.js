const db = require("../DB/index");
const upload = require("./imageUploader")
const getPosts = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT posts.id, posts.pictures, posts.content, users.id AS users_id, users.username, users.profile_pic FROM posts INNER JOIN users ON users.id=posts.user_id");
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
      `SELECT * FROM posts WHERE user_id=$1`,[req.params.id]
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
    let post = await db.one("DELETE FROM posts WHERE id=$1 RETURNING *", postId);
    res.status(200).json({
      status: "success",
      message: "Users post deleted",
      payload: post,
    });
  } catch (err) {
    res.status(500).json({
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
        const {content} = req.body
        const {user_id} = req.params
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

const getCommentsByPosts = async (req, res, next) => {
  try {
      let commentsByPosts = await db.any('SELECT * FROM Comments WHERE photo_id = $1', [req.params.posts_id]);
      res.status(200).json({
          status: 'success',
          message: "got all comments",
          payload: commentsByPosts
      })
  } catch(error) {
      res.status(400).json({
          status: 'error',
          message: 'No Photos'
      })
  }
}




// const getPostsAndUserName = async(req, res, next)=>{
//   try{
//     let postsAndUserName = await db.any
//   }catch(err){
//     res.status(400).json({
//       status:'error',
//       message:'no username and post'
//     })
//   }
// }

// const addNewComments = asycn(req, res, next)=>{
//   try {
//     let newComment = await db.one(`INSERT INTO Comments (commenters_id, photo_id, content) VALUES ('${req.body.commenters_id}', '${req.body.photo_id}', '${req.body.content}') RETURNING *`);
//     res.status(200).json({
//         status: 'success',
//         message: 'new comment added',
//         payload: newComment
//     })
// } catch(error) {
//     res.status(400).jsom({
//         status: 'error',
//         message: 'no new comment'
//     })
// }
// }





module.exports = { getPosts, getUsersPosts, deletePost, editPost, createPost};
