const Express = require('express')
const path = require('path')
const port = 3000
const app = Express()
const users = require('./users')
const baseFolder = path.join(__dirname,'templates')

app.use(Express.urlencoded({
    extended:true
}))

app.use(Express.json())

app.use('/users',users)

app.get('/',(req,res) => {
    res.sendFile(baseFolder+'/index.html')
})

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})