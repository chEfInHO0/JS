const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3000

const server = http.createServer((req,res) => {
    fs.readFile('index.html',function(err,data){
        if (err){
            console.log(err)
        }else{
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
        }
    })
})

server.listen(port, () => {
    console.log(`Server is Runningo on port ${port}`)
})