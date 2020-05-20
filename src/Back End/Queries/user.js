const db = require("../DB/index");

const getSingleUser = async (req, res, next) => {
    try {
        let userId = req.params.id;
        let user = await db.one(`SELECT * FROM users WHERE id=${userId}`);
        res.status(200).json({
            status: "success",
            message: "single user",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Couldn't get User",
            payload: err
        })
        next()
    }
}

const logIn = async (req, res, next) => {
    try{
        let user = await db.one(
            `SELECT * FROM users WHERE userName = '${req.body.userName}' AND password = '${req.body.password}'`
            );
            res.status(200).json({
                user, 
                status: "success",
                message: "USER"
            })
    } catch (err){
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
        next()
    }
}

const editUser = async (req, res, next) => {
    try {
        let {userName, user_pic} = req.body;
        let userId = req.params.id;
        let user = await db.one(`UPDATE users SET  userName='${userName}', user_pic='${user_pic}' WHERE id=${userId} RETURNING *`);
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
        next()
    }
}

const createUser = async (req, res, next) => {
    try {
        let user = await db.one(
            `INSERT INTO users (fullName, userName, email, password, user_pic) VALUES('${req.body.fullName}', '${req.body.userName}', '${req.body.email}', '${req.body.password}', '${req.body.user_pic}') RETURNING *`)
        res.status(200).json({
            user,
            status: "success",
            message: "added user posts"
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

module.exports = {getSingleUser, logIn, deleteUser, editUser, createUser}