const express =  require('express')
const app = express()
const port = 3333
app.use(express.json())
app.post('/user',(request,response)=>{
    const {name, email, password} = request.body
    response.json({name, email, password})
})
app.listen(port,()=>{ console.log(`Server is Running On Por ${port}`)});

