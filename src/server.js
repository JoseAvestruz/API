const express =  require('express')
const app = express()
const port = 3333

app.get('/message/:id/:user',(require,response)=>{
    const {id , user} = require.params
    response.send(`Id do usuario e ${id} com o nome ${user}`)
})

app.listen(port,()=>{ console.log(`Server is Running On Por ${port}`)});