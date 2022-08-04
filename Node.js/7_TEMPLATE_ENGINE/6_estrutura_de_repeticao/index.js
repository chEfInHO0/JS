const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res) => {
    const auth = false
    const user = {name:"Luccas",surname:"Santos",age:26}
    const t = "Teste de envio de variavel para view"
    res.render('home',{usuario:user,t,auth})
})

app.listen(3000,() => {console.log('app rodando na porta 3000')})