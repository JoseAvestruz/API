const { Router } = require("express")

const userRouts = Router()
userRouts.post('/user', (request, response) => {

    const { name, email, password } = request.body

    response.json({ name, email, password })
})
module.exports = userRouts;