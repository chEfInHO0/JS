const fs = require('fs')

if(!fs.existsSync('./minhaPasta')){
    console.log('Não existe')
    fs.mkdirSync('minhaPasta')
}else{
    console.log('Existe')
}