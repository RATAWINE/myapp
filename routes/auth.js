const express = require("express")
const { newUser } = require("../controllers/auth")
const Router = express.Router()

Router.route("/register/user").post(newUser)


module.exports = Router