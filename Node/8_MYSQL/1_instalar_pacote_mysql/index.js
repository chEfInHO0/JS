const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

//static
app.use(express.static('public'))
//

//set body parser
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
//

//set partial dir
const hbs = exphbs.create({partialsDir:'views/partials'})
//

//config handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
//

//set routes
app.get('/',(req,res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dataTeste'
})

conn.connect((err) => {
    if(err){
        console.log(err)
        return
    }
    app.listen(3000,() => {
        if(err){
            console.log(err)
        }
    })
    console.log('Conexao Estabelecida')
})