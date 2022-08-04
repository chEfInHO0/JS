const fs = require('fs')

fs.rename('arquiv.txt','arquivo.txt',function(err){
    if (err){
        console.log(err)
        return
    }
    console.log('Arquivo renomeado com Sucesso')
})