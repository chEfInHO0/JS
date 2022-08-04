const fs = require('fs')

fs.writeFile('arquivo2.txt','oi',function(error){
    setTimeout(() => {
        console.log('arquivo criado') //executado apos 1s
    }, 1000);
})

console.log(`fim`)