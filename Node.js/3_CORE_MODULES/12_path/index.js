const path = require('path')

const customPath = '/relatorios/compras/fevereiro2022/estoque.pdf'

console.log(path.basename(customPath))
console.log(path.dirname(customPath))
console.log(path.extname(customPath))