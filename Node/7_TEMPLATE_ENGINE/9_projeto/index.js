const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const catalog = require('./catalog')

const hbs = exphbs.create({partialsDir:"views/partials"})

app.use(express.static("public"))
app.engine("handlebars",hbs.engine)
app.set("view engine","handlebars")

const product = [
    {
        name:"Vestido Preto",
        imgLoc:"/imgs/vestido.jpeg",
        barCode:"1010001",
        installmentPrice:105,
        regularPrice:100,
        installments:3,
        taxes:false
    },{
        name:"Sapato Salto Fino",
        imgLoc:"/imgs/sapato.jpeg",
        barCode:"1010002",
        installmentPrice:95,
        regularPrice:90,
        installments:2,
        taxes:false
    },{
        name:"Meia Calca Preta",
        imgLoc:"/imgs/meiacalca.jpeg",
        barCode:"1010003",
        installmentPrice:30,
        regularPrice:30,
        installments:1,
        taxes:false
    },{
        name:"Conjunto de Joias",
        imgLoc:"/imgs/joias.jpeg",
        barCode:"1010004",
        installmentPrice:60,
        regularPrice:60,
        installments:1,
        taxes:false
    }
]
app.use('/catalog',catalog)

app.get('/about',(req,res) => {
    res.render('about')
})
app.get('/',(req,res) => {
    res.render("home",{product})
})

app.listen(3000,()=>{console.log('running on port 3000')})