const { Router } = require("express")

const Userscontrollers = require("../controllers/Userscontrollers")

const userRoutes = Router()

const userscontrollers = new Userscontrollers()


userRoutes.post("/" ,userscontrollers.create)
userRoutes.put("/:id",userscontrollers.update)
module.exports = userRoutes;