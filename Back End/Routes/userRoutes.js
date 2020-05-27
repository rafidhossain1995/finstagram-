const users = require("express").Router();
const { getAllUsers ,login, createUser, editUser, deleteUser } = require("../Queries/user")



users.get("/", getAllUsers);

users.post("/login", login); // get user by username

users.post("/", createUser); 

users.patch("/:id", editUser);

users.delete("/:id", deleteUser);


module.exports = users;