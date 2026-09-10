const express =  require('express')
const app = express()
const port = 3333

app.listen(port,()=>{ console.log(`Server is Running On Port ${port}`)})