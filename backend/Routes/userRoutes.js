const users = require("express").Router();
const { loginUser, createUser, editUser, deleteUser, getAllUsers } = require("../Queries/user")
const {checkFirebaseToken} = require ("../middleware/auth")




users.post("/loginUser", loginUser); // get user by username

users.post("/", createUser); 

users.get("/all", checkFirebaseToken, getAllUsers)

users.patch("/:id", editUser);

users.delete("/:id", deleteUser);


module.exports = users;


