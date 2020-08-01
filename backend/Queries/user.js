const db = require("../DB/index");


const getAllUsers = async (req, res, next) => {
    try {
        const users = await db.any("SELECT * FROM users");
        res.status(200).json({
            users,
            message: "All USERS"
        })
    } catch (err) {
        next(err);
    }
}

const loginUser = async (req, res, next) => {
    try{
        let user = await db.one(
            `SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`
            );
            res.status(200).json({
                user, 
                status: "success",
                message: "USER"
            })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Username or Password does not exist",
            payload: err
        })
        next(err);
    }
}


const deleteUser = async (req, res, next) => {
    try {
        let {userId} = req.params.id;
        let user = ("DELETE FROM users WHERE id=$1 RETURNING *", userId)
        res.status(200).json({
            status: "success",
            message: " user deleted",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
       
    }
}

const editUser = async (req, res, next) => {
    try {
        let {username, user_pic} = req.body;
        let userId = req.params.id;
        let user = await db.one(`UPDATE users SET  username='${username}', user_pic='${user_pic}' WHERE id=${userId} RETURNING *`);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
       
    }
}

const createUser = async (req, res, next) => {
    try {
      let { id, email,  username} = req.body;
      let user = await db.one(
        "INSERT INTO users (id, email, username) VALUES ($1, $2, $3) RETURNING *",
        [ id, email, username]
      );
      res.status(200).json({
        status: "Success",
        message: "Created new user",
        body: {
          user,
        },
      });
    } catch (error) {
      res.json({
        status: "Error",
        message: "Username already exists",
      });
      next(error);
    }
  };


//   const getSingleUser = async (req, res, next) => {
//         try {
//             let userEmail = await db.one('SELECT * FROM users WHERE email = $1', [req.params.email]);
//             res.status(200).json({
//                 status: "success",
//                 message: "User Retrieved",
//                 payload: userEmail
//             });
//         } catch(err) {
//            console.log(err)d
//         }
// }

const getSingleUser = async (req, res, next) => {
    try {
        let user = await db.one(`SELECT * FROM users WHERE email = $1`, [req.params.email]);
        res.status(200).json({
            status: "success",
            message: " USER",
            user
        })
    } catch (err) {
        next(err);
    }
}

module.exports = {getAllUsers, loginUser, deleteUser, editUser, createUser, getSingleUser}





