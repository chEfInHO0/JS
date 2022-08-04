const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res) => {
    const user = {name:"Stephanny",surname:"Santana",age:21}
    const t = "Teste de envio de variavel para view pela segunda vez"
    res.render('home',{usuario:user,t})
})

app.listen(3000,() => {console.log('app rodando na porta 3000')})