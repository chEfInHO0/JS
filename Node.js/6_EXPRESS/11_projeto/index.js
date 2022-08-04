const express = require('express')
const path = require('path')
const app = express()
const products = require('./produtcs')
const port = 5000
const rootFolder = path.join(__dirname,'template')

//Leitura Body

app.use(
    express.urlencoded({
        extended:true
    }))

app.use(express.json())
//

//Arquivos estaticos

app.use(express.static('public'))
//

//definindo rotas externas
app.use('/products',products)
//


app.get('/',(req,res)=>{
    res.sendFile(`${rootFolder}/index.html`)
})

app.listen(port,()=>{console.log(`App is running on port ${port}`)})