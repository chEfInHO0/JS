const path = require('path')

const pathAbsoluto = path.resolve('arquivo.txt')
console.log(pathAbsoluto)

const midFolder = 'relatórios/'
const fileName = 'estoque2022.txt'

const finalFolder = path.join('/','geral/',midFolder,'2022/',fileName)
console.log(finalFolder)