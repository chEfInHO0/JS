const meuModulo = require('./meu_modulo') // ./ é necessário pois sem isso o node irá tentar importar um core module
const soma = meuModulo.soma

soma(2,2)
soma(1,7)
soma(6,20)