const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({partialsDir:'views/partials'})
const app = express()
const conn = require('./db/conn')

const User = require('./models/User')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res)=> {
    res.render('home')
})

conn.sync().then(app.listen(3000)).catch(err => {console.log(err)})