const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3000

const server = http.createServer((req,res) => {
    const q = url.parse(req.url,true)
    const fileName = q.pathname.substring(1)
    if(fileName == ''){
        res.writeHead(302,{Location:'/index.html'})
        res.end()
    }
    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){
            fs.readFile(fileName,'utf-8',function(err,data){
                if(err){
                    console.log(err)
                    return
                }else{
                    res.writeHead(200,{'Content-type':'text/html'})
                    res.write(data)
                    return res.end()
                }
            })
        }else{
            fs.readFile('404.html','utf-8',function(err,data){
                if(err){
                    console.log(err)
                    return 
                }else{
                    res.writeHead(404,{'Content-type':'text/html'})
                    res.write(data)
                    return res.end()
                }
            })
            
        }
    }
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
