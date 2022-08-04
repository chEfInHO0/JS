const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferida? ',(language) => {
    if(language == 'Python'){
        console.log('Isso nem é Linguagem')
    }else{
        console.log(`Minha linguagem favorita é ${language}`)
    }
    readline.close()
})