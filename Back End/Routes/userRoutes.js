const users = require("express").Router();
const { loginUser, createUser, editUser, deleteUser } = require("../Queries/user")





users.post("/loginUser", loginUser); // get user by username

users.post("/", createUser); 

users.patch("/:id", editUser);

users.delete("/:id", deleteUser);


module.exports = users;


