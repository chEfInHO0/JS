const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({partialsDir:'views/partials'})
const mysql = require('mysql')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.post('/books/insert',(req,res) => {
    console.log(req.body)
    const title = req.body.title
    const pageqnty = req.body.pageqnty
    const sql = `INSERT INTO books (title, pageqnty) VALUES ("${title}",${pageqnty})`
    connection.query(sql,(err)=> {
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})

app.get('/',(req,res) => {
    res.render('home')
})
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodemysql',
})
connection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Conexao estabelecida')
        app.listen(3000)
    }
})
