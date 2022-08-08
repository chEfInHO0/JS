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

app.get('/create',(req,res) => {
    res.render('adduser')
})

app.post('/create',(req,res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
    if(newsletter == 'on'){
        newsletter = true
    }else{
        newsletter = false
    }
    User.create({name,occupation,newsletter})
    res.redirect('/create')
})

app.get('/records', async (req,res)=> {
    const user = await User.findAll({raw:true})
    res.render('records',{user})
})
app.get('/', async (req,res) => {
    const user = await User.findAll({raw:true})
    res.render('home',{user})
})

conn.sync().then(app.listen(3000)).catch(err => {console.log(err)})