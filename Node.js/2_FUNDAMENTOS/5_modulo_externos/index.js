const minimist = require('minimist')

const args = minimist(process.argv.splice(2))

//console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(`O nome dele e ${nome} e sua profissao e ${profissao}`)