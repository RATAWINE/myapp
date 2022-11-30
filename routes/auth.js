const express = require("express")
const { newUser, getUser } = require("../controllers/auth")
const Router = express.Router()

Router.route("/register/user").post(newUser)
Router.route("/get/user").get(getUser)

module.exports = Router