const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({partialsDir:'views/partials'})
const app = express()
const pool = require('./DB/conn')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/db/delete/:id',(req,res) => {
    const id = req.params.id
    const sql = 'DELETE FROM dados WHERE ??=?'
    const data = ["id",id]
    pool.query(sql,data,(err) => {
        if(err){
            console.log(err)
            return
        }else{
            res.redirect('/')
        }
    })
})

app.get('/db/update/:id',(req,res) => {
    const id = req.params.id
    const query1 = 'SELECT * FROM dados WHERE ??=?'
    const dados = ["id",id]
    pool.query(query1,dados,(err,data) => {
        if(err){
            console.log(err)
            return
        }else{
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
        }
    })
})

app.listen(3000)