const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({partialsDir:'views/partials'})
const app = express()
const pool = require('./db/conn')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.post('/db/send',(req,res) => {
    const occupation = req.body.occupation
    const sql = `INSERT INTO dados (??) VALUES (?);`
    const data = ["occupation",`${occupation}`]
    pool.query(sql,data,(err) => {
        if(err){
            console.log(err)
            return
        }else{
            console.log('Dados Armazenados com Sucesso')
            res.redirect('/')
        }
    })
})

app.get('/',(req,res) => {
    pool.query(`SELECT * FROM dados`,(err,data)=>{
        if(err){
            console.log(err)
            return
        }else{
            console.log(`DATA: ${data}`)
            const cargos = data
            res.render('home',{cargos})
        }
    })
})

app.listen(3000)