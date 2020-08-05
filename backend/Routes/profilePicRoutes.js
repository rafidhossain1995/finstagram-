const users = require("express").Router();
const {checkFirebaseToken} = require ("../middleware/auth")
const {createProfilePic} = require("../Queries/profilePics")

profile_pic.post("/users_profile_pic_id/", createProfilePic)


module.exports = profilePicRoutes