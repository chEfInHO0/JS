//console.log(process.argv)

const args = process.argv.splice(2)

//console.log(args)

const nome = args[0].split('=')[1]
const idade = args[1].split('=')[1]
console.log(`My name is ${nome} and im ${idade} years old`)