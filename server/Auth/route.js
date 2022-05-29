const express = require("express")
const router = express.Router()
const { register, login } = require("./auth")
const {generateWord} = require("../words")

router.route("/register").post(register);
router.route("/login").post(login);


module.exports = router

