const users = require("express").Router();
const { getSingleUser ,login, createUser, editUser, deleteUser } = require("../Queries/user")



users.get("/:id", getSingleUser);

users.post("/login", login); // get user by username

users.post("/", createUser); 

users.patch("/:id", editUser);

users.delete("/:id", deleteUser);


module.exports = users;