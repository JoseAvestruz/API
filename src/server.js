const express =  require('express')
const app = express()
const port = 3333

app.get('/message/:id/:user',(require,response)=>{
    //route Params Elas sao obrigatorio
    const {id , user} = require.params
    response.send(`Id do usuario e ${id} com o nome ${user}`)
})

//Route Query ja e opcinal  esse  basta acessar a rota
app.get('/user',(request,response)=>{
    const {page , limit, category} = request.query
   // saida  http://localhost:3333/user/?page=2&limit=10
  // http://localhost:3333/user/?page=2&limit=10&category=jogos
    response.send(`Pagina ${page}. Mostrar ${limit} categoria ${category}`);
})

app.listen(port,()=>{ console.log(`Server is Running On Por ${port}`)});

