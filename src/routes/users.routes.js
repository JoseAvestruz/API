const { Router } = require("express")

const Userscontrollers = require("../controllers/Userscontrollers")

const userRoutes = Router()
  
 function myMiddleware(request, response, next){
    console.log('Você Passou pelo Middleware')
    next()

 }



const userscontrollers = new Userscontrollers()

userRoutes.post("/", myMiddleware ,userscontrollers.create)

module.exports = userRoutes;