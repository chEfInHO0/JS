const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req,res) => {
    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name
    if(!name){
        fs.readFile('index.html',function(err,data){
            if(err){
                console.log(err)
                return
            }
            res.write(data)
            return res.end()
        })
    }else{
        const newLineName = name + '\r\n';
        fs.appendFile('arquivo.txt',newLineName, 'utf-8',function(err,data){
            if(err){
                console.log(err)
                return
            }else{
                res.writeHead(302,{Location:'/'})
                res.end()
            }
        })
    }
})

server.listen(port,() => {
    console.log(`Server is Running on port ${port}`)
})