const minimist = require('minimist')
const soma = require('./soma')
const total = soma.soma
const args = minimist(process.argv.splice(2))
const a = args['num1']
const b = args['num2']
console.log(total(a,b))


