const express = require('express')
const path = require('path')
const router = express.Router()
const rootFolder = path.join(__dirname,'../template')
let qnt_prod;

router.use(express.static('public'))

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.post('/check',(req,res)=>{
    console.log(res.body)
    //res.sendFile(`<h1>${qnt_prod}</h1>`)
})

module.exports = router