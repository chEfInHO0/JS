const express = require('express')
const exphbs = require('express-handlebars')

const router = express.Router()
const path = require("path")
const rootFolder = path.join(__dirname,'../views')

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
const hbs = exphbs.create({partialsDir:`${rootFolder}/partials`})
//arquivos estaticos
router.use(express.static('public'))

//config handlebars
express().engine('handlebars',hbs.engine)
express().set('view engine','handlebars')

//estabelecer rotas
router.get('/prod1',(req,res) => {
    res.render(`${rootFolder}/prod1`,{prod1:product[0]})
})

router.get('/prod2',(req,res) => {
    res.render(`${rootFolder}/prod2`,{prod2:product[1]})
})

router.get('/prod3',(req,res) => {
    res.render(`${rootFolder}/prod3`,{prod3:product[2]})
})

router.get('/prod4',(req,res) => {
    res.render(`${rootFolder}/prod4`,{prod4:product[3]})
})

module.exports = router
