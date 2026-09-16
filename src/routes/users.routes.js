const { Router } = require("express")

const Userscontrollers = require("../controllers/Userscontrollers")

const userRoutes = Router()

const userscontrollers = new Userscontrollers()

userRoutes.post("/", userscontrollers.create)

module.exports = userRoutes;