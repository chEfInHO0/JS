const path = require('path')
const express = require('express')
const router = express.Router()
const baseFolder = path.join(__dirname,'../templates')

router.get('/add',(req,res) => {
    res.sendFile(`${baseFolder}/usersform.html`)
})
router.post('/save',(req,res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(`O usuario ${name} tem ${age} anos`)
    res.sendFile(`${baseFolder}/usersform.html`)
})
router.get('/:id',(req,res) => {
    res.sendFile(`${baseFolder}/users.html`)
    id = req.params.id
    console.log(`Estamos buscando pelo usuario ${id}`)
})

module.exports = router