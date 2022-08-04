const Express = require('express')
const path = require('path')
const port = 3000
const app = Express()
const baseFolder = path.join(__dirname,'templates')

app.get('/users/:id',(req,res) => {
    res.sendFile(`${baseFolder}/users.html`)
    id = req.params.id
    console.log(`Estamos buscando pelo usuario ${id}`)
})

app.get('/',(req,res) => {
    res.sendFile(baseFolder+'/index.html')
})

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})