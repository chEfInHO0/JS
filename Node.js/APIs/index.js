const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/create',(req,res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    console.log(name)
    console.log(occupation)
    res.json({message:`O usuário ${name} foi cadastrado com sucesso`})
})

app.get('/',(req,res) => {
    res.json({message:'Primeiro teste da API'})
})

app.listen(3000, () => {console.log('Running on port 3000')})