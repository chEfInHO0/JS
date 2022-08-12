//type guard

type valor = string|number

function sum(a:valor,b:valor){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }else if (typeof a === "number" && typeof b ==='number'){
        console.log(a+b)
    }else{
        console.log('Os valores foram declarados com tipos diferentes um do outro')
        if(typeof a === 'string'){
            a=parseFloat(a)
        }
        if(typeof b === 'string'){
            b=parseFloat(b)
        }
        console.log('Soma : ',a+b)
    }
}
sum(10,5)
sum('55','6')
sum(15,'6')

type opr = 'sum'|'mult'|'div'

function calculator(val:number[],operation:opr){
    if(operation === 'sum'){
        const sum = val.reduce((i,total) => i+total)
        console.log(sum)
    }else if (operation == 'mult'){
        const mult = val.reduce((i,total) => i*total)
        console.log(mult)
    }else if (operation === 'div'){
        const div = val.reduce((i,total) => i/total)
        console.log(div.toPrecision(4))
    }else{
        console.log('Está operação não existe no sistema')
    }
}
calculator([1,4,3],'sum')
calculator([10,4,3],'mult')
calculator([100,2,6],'div')
//calculator([13,44,31],'sub')

class User{
    name:string
    constructor(name:string){
        this.name = name
    }
}

class SuperUser extends User{
    constructor(name:string){
        super(name)
    }
}

const marcos = new User('Marcos')
const luccas = new SuperUser('Luccas')

console.log(luccas)
console.log(marcos)

function greet(obj:object){
    if (obj instanceof SuperUser){
        console.log('Super Usuário',obj.name)
    }else if(obj instanceof User){
        console.log('Usuário',obj.name)
    }
}

greet(luccas)
greet(marcos)