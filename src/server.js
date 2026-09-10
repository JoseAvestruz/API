const express =  require('express')
const app = express()
const port = 3333

app.get('/',(require,response)=>{
    response.send('Hello Word With Node.js !')
})
app.listen(port,()=>{ console.log(`Server is Running On Port ${port}`)})