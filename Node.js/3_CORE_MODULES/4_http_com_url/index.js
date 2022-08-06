const http = require('http')
const port = 3000

const server = http.createServer((req,res) => {
    const parsedUrl = require('url').parse(req.url,true)
    const name = parsedUrl.query.name
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    if (!name){
        res.end('<h1>Formulario de Registro: </h1> <form method="GET"><label for="name">Digite seu nome: <br></label><input type="text" id="name" name="name"><br><input type="submit" value="Enviar"></form>')
    }else{
        res.end(`<h1>Bem vindo ${name}</h1>`)
    }
    
    
})

server.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})