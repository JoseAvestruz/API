const { Router } = require("express")

const Userscontrollers = require("../controllers/Userscontrollers")
const AppError = require('../utils/AppError')

const userRoutes = Router()
  



const userscontrollers = new Userscontrollers()

userRoutes.post("/" ,userscontrollers.create)

module.exports = userRoutes;