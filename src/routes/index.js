const { Router}  = require('express')

const usersRouter = require("./user.route")
const routes = Router()

routes.use("/user", usersRouter)

module.exports = routes

