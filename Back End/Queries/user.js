const db = require("../DB/index");

const getAllUsers = async (req, res, next) => {
    try {
        let userId = req.params.id;
        let user = await db.one("SELECT * FROM users");
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
       
    }
}

const login = async (req, res, next) => {
    try{
        let user = await db.one(
            `SELECT * FROM users WHERE userName = '${req.body.username}' AND password = '${req.body.password}'`
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

const createUser = async (req, res) => {
    console.log(req.body)
    try {
        let user = await db.one(
            "INSERT INTO users (id, fullname, username, email) VALUES(${id}, ${fullname}, ${username}, ${email}) RETURNING *" , 
            req.body)
            
        res.status(200).json({
            user,
            status: "success",
            message: "added user"
        })
    } catch (err){
        console.log(err)
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
       
    }
}

module.exports = {getAllUsers, login, deleteUser, editUser, createUser}



