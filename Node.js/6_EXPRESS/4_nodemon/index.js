const Express = require('express')
const path = require('path')
const fs = require('fs')
const port = 3000
const app = Express()
const basicHTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Home</title></head><body><header><h1>Home Express Novo</h1></header></body></html>'
if(!fs.existsSync('templates')){
   fs.mkdirSync('templates')
}
const baseFolder = path.join(__dirname,'templates')
console.log(baseFolder)
fs.writeFileSync(baseFolder+'/index.html',basicHTML,(err) => console.log(err))

app.get('/',(req,res) => {
    res.sendFile(baseFolder+'/index.html')
})
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})