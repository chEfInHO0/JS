const chalk = require(`chalk`)
const nota = 5
if (nota>6){
    console.log(chalk.green('Parabens voce esta aprovado'))
}else{
    console.log(chalk.bgRed.black('Voce tera que realizar a prova novamente'))
}
//console.log(chalk.green('Sucesso'))
//console.log(chalk.bgRed('Erro'))