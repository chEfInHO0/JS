//LIFO Last In First Out 

class Pilha {
    constructor(){
        this.itens = []
    }

    push(item){
        this.itens.push(item);
    }
    pop(){
        this.itens.pop();
    }
    top(){
        return this.itens[this.itens.length-1];
    }
    isEmpty(){
        return this.itens.length == 0;
    }
}
const pilha = new Pilha()
pilha.push(10)
pilha.push(20)
pilha.push(30)
pilha.push(40)
pilha.pop()

console.table(pilha)
console.table(pilha.top())
console.table(pilha.isEmpty())
pilha.pop()
pilha.pop()
pilha.pop()
console.table(pilha.isEmpty())