const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({partialsDir:'views/partials'})
const app = express()
<<<<<<< HEAD
const pool = require('./DB/conn')
=======
const pool = require('./db/conn')

app.use(express.static('public'))
>>>>>>> 84a20dd745088277ce7edad6c0943b371f7a984f

app.use(express.urlencoded({extended:true}))
app.use(express.json())

<<<<<<< HEAD
app.use(express.static('public'))

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/db/delete/:id',(req,res) => {
    const id = req.params.id
    const sql = 'DELETE FROM dados WHERE ??=?'
    const data = ["id",id]
=======
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.post('/db/send',(req,res) => {
    const occupation = req.body.occupation
    const sql = `INSERT INTO dados (??) VALUES (?);`
    const data = ["occupation",`${occupation}`]
>>>>>>> 84a20dd745088277ce7edad6c0943b371f7a984f
    pool.query(sql,data,(err) => {
        if(err){
            console.log(err)
            return
        }else{
<<<<<<< HEAD
=======
            console.log('Dados Armazenados com Sucesso')
>>>>>>> 84a20dd745088277ce7edad6c0943b371f7a984f
            res.redirect('/')
        }
    })
})

<<<<<<< HEAD
app.get('/db/update/:id',(req,res) => {
    const id = req.params.id
    const query1 = 'SELECT * FROM dados WHERE ??=?'
    const dados = ["id",id]
    pool.query(query1,dados,(err,data) => {
=======
app.get('/',(req,res) => {
    pool.query(`SELECT * FROM dados`,(err,data)=>{
>>>>>>> 84a20dd745088277ce7edad6c0943b371f7a984f
        if(err){
            console.log(err)
            return
        }else{
<<<<<<< HEAD
            const currData = data[0]
            res.render('update',{currData})
        }
    })
})

app.post('/db/update/:id',(req,res) => {
    const id = req.params.id
    const occupation = req.body.occupation
    const query2 = 'UPDATE dados SET ??=? WHERE ??=?'
    const dados = ["occupation",occupation,"id",id]
    pool.query(query2,dados,(err,data) => {
        if(err){
            console.log(err)
            return
        }else{
            const currData = data[0]
            res.redirect('/')
        }
    })
})

app.post('/db/send',(req,res) => {
    const occupation = req.body.occupation
    const sql = `INSERT INTO dados (??) VALUES (?)`
    const data = ["occupation",`${occupation}`]
    pool.query(sql,data,(err)=>{
        if(err){
            console.log(err)
            return
        }else{
            console.log('Dados armazenados com sucesso')
        }
    })
    res.redirect('/')
})

app.get('/',(req,res)=>{
    const sql = `SELECT * FROM dados`
    pool.query(sql,(err,data) => {
        if(err){
            console.log(err)
        }else{
            const dados = data
            res.render('home',{dados})
=======
            console.log(`DATA: ${data}`)
            const cargos = data
            res.render('home',{cargos})
>>>>>>> 84a20dd745088277ce7edad6c0943b371f7a984f
        }
    })
})

app.listen(3000)