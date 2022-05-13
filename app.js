//usando objeto express 
const express = require('express')
//app express 
const app = express()
// puerto para ver nuestra app localhost:3000
const port = 3000

// path inicial responderá a la url localhost:3000
app.get('/', (req, res) =>{
    res.send('Hello world')
})

// para inicializar la app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})