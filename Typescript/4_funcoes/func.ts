//função sem retorno 

function sayHello(): void {
    console.log('Hello')
}

//callback como argumento

function sayHelloAndReturn(name?: string) {
    return `Hello ${name}`;
}

function getName(f: (name: string) => string, userName: string) {
    const greet = f(userName)
    console.log(greet)
}

getName(sayHelloAndReturn, 'Luccas')


//Generic Types <T> ou <U>

function firstElement<T>(arr: T[]): T {
    return arr[0]
}
console.log(firstElement([1, 2, 3, 4, 5]))
console.log(firstElement(['a', 'b', 'c', 'd', 'e']))

function mergeObj<T, U>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

//Constraints

function setElement<T extends string | number>(name: T): T {
    return name
}

//Argumentos opicionais

function buildName(name: string, middleName?: string, lastName?: string) {
    if (middleName && lastName) {
        console.log(`${name} ${middleName} ${lastName}`);
    }
    else if (middleName && !lastName) {
        console.log(`${name} ${middleName}`);
    }
    else if (!middleName && lastName) {
        console.log(`${name}${lastName}`);
    }else{
        console.log(name)
    }
}
buildName('Luccas')
buildName('Luccas', 'Elias')
buildName('Luccas', 'Elias de Almeida dos', 'Santos')

//Parâmetro Default

function soma(a:number,b=5){
    return a+b
}

//type Unknow - para operações complexas de alguns tipos ele deve passar por processo de verificação

function dunno(x:unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if (typeof x === 'number'){
        console.log('X é um numero')
    }
}

//never

function showErrorMessage(x:string) :never{
    throw new Error(x)
}
//showErrorMessage('alguma coisa')

//Operador rest

function sumAll(...n:number[]){
    const sum = n.reduce((i,total) => i+total)
    console.log(sum)
}
sumAll(1,2,3,4,5,6,7,8,9)

//Destructuring 

function showProdDetail({name,price}:{name:string,price:number}):string{
    return `${name} custa R$${price}`
}

const camisa = {name:'Camisa',price:49.90}

console.log(showProdDetail(camisa))