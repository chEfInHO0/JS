const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashboard',(req,res) => {
    const storage = ['Item A','Item B','Item C','Item D']
    res.render('dashboard',{storage})
})
app.get('/blog',(req,res) => {
    const post = {
        title:'Aprendendo Node.js',
        author:'Luccas Elias',
        category:'JavaScript',
        subject:'Programming Language',
        comments:'4'
    }
    res.render('blogpost',{post})
})
app.get('/',(req,res) => {
    const auth = true
    const user = {name:"Luccas",surname:"Santos",age:26}
    const t = "Teste de envio de variavel para view"
    res.render('home',{usuario:user,t,auth})
})

app.listen(3000,() => {console.log('app rodando na porta 3000')})