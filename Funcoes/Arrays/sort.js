//array.sort((a,b) => a - b) => ordem crescente
//array.sort((a,b) => a - b) => ordem decrescente

const clientes = ['Carlos', 'Gabriel', 'Vanessa', 'Jonas', 'Adriana']
console.table(clientes)
clientes.sort()
console.table(clientes)

const numeros = [10,100,1.99,5000,40.2]
console.table(numeros)
numeros.sort((a,b) => a - b)
console.table(numeros)

const clientesComEstrelas = [
    ['Carlos',3],
    ['Gabriel',5],
    ['Vanessa',2],
    ['Jonas',4],
    ['Adriana',3]
    ]
console.table(clientesComEstrelas)
clientesComEstrelas.sort((a,b) => b[1] - a[1])
console.table(clientesComEstrelas)