const express =  require('express')
const app = express()
const port = 3333

app.get('/message/:id/:user',(require,response)=>{
    //route Params
    const {id , user} = require.params
    response.send(`Id do usuario e ${id} com o nome ${user}`)
})

//Route Query
app.get('/user',(request,response)=>{
    const {page , limit} = request.query
    response.send(`Pagina ${page}. Mostrar ${limit}`);
})

app.listen(port,()=>{ console.log(`Server is Running On Por ${port}`)});