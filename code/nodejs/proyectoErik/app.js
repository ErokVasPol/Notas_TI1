const express = require('express');
const app = express()
const hostname = '127.0.0.1'
const port = 300

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.listen(port, hostname,() => {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`)
})
