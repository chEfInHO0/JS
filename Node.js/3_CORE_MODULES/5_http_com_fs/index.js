const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req,res) => {
    fs.readFile('index.html',(err,data)=>{
        if (err){
            console.log(err)
        }
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})