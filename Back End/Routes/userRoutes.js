const users = require("express").Router();
const { loginUser, createUser, editUser, deleteUser, getAllUsers } = require("../Queries/user")





users.post("/loginUser", loginUser); // get user by username

users.post("/", createUser); 

users.get("/all", getAllUsers)

users.patch("/:id", editUser);

users.delete("/:id", deleteUser);


module.exports = users;


