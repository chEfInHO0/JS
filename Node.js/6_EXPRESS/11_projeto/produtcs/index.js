const express = require('express')
const path = require('path')
const fs = require('fs')
const router = express.Router()
const rootFolder = path.join(__dirname, '../template')
const rootFolderStorage = path.join(`${__dirname}`, '../../11_projeto')
let productName;
let productQnty;
let storage = 'storage.json'
let initalStorage = {"storage":[]}
let table = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="css/template.css"><title>Home</title></head><body><div id="storageArea"><h1 id="titulo">Estoque Atual :</h1><table id="registro"><tr> <th>ID</th> <th>NAME</th> <th>QNT</th> </tr>';
function createStorege(){
  if(!fs.existsSync(`${rootFolderStorage}/${storage}`)){
    console.log('estoque ainda não criado')
    fs.writeFileSync(`${rootFolderStorage}/${storage}`,`${JSON.stringify(initalStorage)}`,(err) => {
        if(err){
            console.log(err)
            return
        }
    })
}
}
function getAllItems(x,y){
    let oldStorage;
    fs.readFile(`${rootFolderStorage}/${storage}`,'utf-8',(err,data) => {
        if(err){
            console.log(err)
            return
        }
            console.log(data)
            oldStorage = JSON.parse(data)
            oldStorage.storage.push({"id": oldStorage.storage.length , "name": x , "qnt": y})
            fs.writeFileSync(`${rootFolderStorage}/${storage}`,`${JSON.stringify(oldStorage)}`,(err) => {
                if(err){
                    console.log(err)
                    return
                }else{
                    console.log('Dados Salvos')
                }
            })
    })
}
function storeNewItems(x,y){
    createStorege()
    getAllItems(x,y)
}  
function setTable(){
    fs.readFile(`${rootFolderStorage}/${storage}`,'utf-8',(err,data) => {
        if(err){
            console.log(err)
            return
        }else{
            let currentStorage = JSON.parse(data).storage
            for(let c = 0;c<currentStorage.length;c++){
                table += `<tr> <td>${currentStorage[c].id}</td> <td>${currentStorage[c].name}</td> <td>${currentStorage[c].qnt}</td></tr>`
            }
            table += '</table></div><br><br><a href="/">Home</a><br><br></body></html>'
            console.log(table)
        }
    })
}
setTable()
router.use(express.static('public'))

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.get('/add', (req, res) => {
    res.sendFile(`${rootFolder}/index2.html`)
})

router.get('/storage', (req, res) => {
    setTable()
    res.send(`${table}`)
    table = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="css/template.css"><title>Home</title></head><body><div id="storageArea"><h1 id="titulo">Estoque Atual :</h1><table id="registro"><tr> <th>ID</th> <th>NAME</th> <th>QNT</th> </tr>';
})

router.post('/check', (req, res) => {
    productName = req.body.prod_name
    productQnty = req.body.qnt_prod
    storeNewItems(productName,productQnty)
    res.sendFile(`${rootFolder}/index3.html`)
    res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="css/template.css"><title>Check Prod</title></head><body><h1> Foram adicionadas ${productQnty} unidades de ${productName} ao estoque </h1> <br> <a href="add">Cadastrar outro Produto</a><br> <a href="/">Home</a></body></html>`)
})
router.get('/remove', (req, res) => {
    res.sendFile(`${rootFolder}/index4.html`)
})

module.exports = router