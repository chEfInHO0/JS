const Express = require('express')
const path = require('path')
const port = 3000
const app = Express()
const baseFolder = path.join(__dirname,'templates')

const checkAuth = function(req,res,next){
    req.authStatus = true

    if(req.authStatus){
        console.log('Usuario logado')
        next() // next e necessario para evitar os loops de carregamento
    }else{
        console.log('Usuario nao esta logado')
        next() // next e necessario para evitar os loops de carregamento
    }
}
app.use(checkAuth)
app.get('/',(req,res) => {
    res.sendFile(baseFolder+'/index.html')
})
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})