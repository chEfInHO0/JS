// FIFO - First In First Out

/*
enqueue
dequeue
front
isEmpty
isFull
rear
*/

class Fila{
    constructor (){
        this.itens = []
    }
    enqueue(item){
        this.itens.push(item)
    }
    dequeue(){
        this.itens.shift()
    }
    front(){
        return this.itens[0]
    }
    rear(){
        return this.itens[this.itens.length-1]
    }
    isEmpty(){
        return this.itens.length == 0
    }
}
const fila = new Fila()
fila.enqueue('Corolla')
fila.enqueue('Lancer')
fila.enqueue('Fusion')
console.table(fila)
fila.dequeue()
console.table(fila)
fila.enqueue('Compass')
fila.enqueue('Tiguan')
console.log(fila.front())
console.table(fila.rear())
console.table(fila.isEmpty())