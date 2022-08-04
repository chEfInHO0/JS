const Express = require('express')
const path = require('path')
const port = 3000
const app = Express()
const baseFolder = path.join(__dirname,'templates')

app.use(Express.urlencoded({
    extended:true
}))

app.use(Express.json())

app.get('/users/add',(req,res) => {
    res.sendFile(`${baseFolder}/usersform.html`)
})
app.post('/users/save',(req,res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuario ${name} tem ${age} anos`)
    res.sendFile(`${baseFolder}/usersform.html`)
})
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