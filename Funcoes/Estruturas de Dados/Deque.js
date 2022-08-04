//LIFO Last In First Out |  FIFO Firts In First Out

/*
insertFront
insertLast
deleteFront
deleteLast
front
rear
isEmpty
*/

class Deque {
    constructor (){
        this.itens = []
    }
    insertFront(item){
        this.itens.unshift(item)
    }
    insertLast(item){
        this.itens.push(item)
    }
    deleteFirst(){
        this.itens.shift()
    }
    deleteLast(){
        this.itens.pop()
    }
    front(){
        return this.itens[0]
    }
    rear(){
        return this.itens[this.itens.length-1]
    }
    
}
const deque = new Deque()

for (let c = 0; c<10;c++){
    deque.insertFront(c)
}
deque.deleteFirst()
console.table(deque)
deque.deleteLast()
console.table(deque)