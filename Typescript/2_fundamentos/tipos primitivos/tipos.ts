//String
let nome: string = 'Luccas'
//Number
let idade: number = 26
//Boolean
const maiorDeIdade: boolean = true

//Arrays

//String
let nomes: string[] = ['Luccas', 'João', 'Maria']
let outrosNomes: Array<string> = ['Marcos', 'Ana', 'Fernanda']
//Number
let idades: number[] = [26, 22, 21]
let outrasIdades: Array<number> = [20, 22, 22]
///Boolean
let eMenino: boolean[] = [true, true, false, true, false, false]
let eMenina: Array<boolean> = [false, false, true, false, true, true]

//Any - Variavel que aceita qualquer tipo de dado

let qualquerCoisa: any = ['Luccas', 26, true, [], {}]

//Tipagem de argumentos

function soma(a: number, b: number) {
    console.log(a + b);
}

//tipagem de retorno

function soma2(a: number, b: number): number {
    return a + b
}

//tipagem de objetos

const pessoa: { nome: string, sobrenome: string, idade: number } = { nome: 'Luccas', sobrenome: 'Santos', idade: 26 }

//parametros opicionais

function media(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        console.log(a + b + c)
        return a + b + c;
    } else {
        console.log(a + b)
        return a + b
    }
}
media(2, 2, 3)
media(4, 6)

//Union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é de R$ ${balance}`)
}

//type Alias

type ID = string | number

function showId(id: ID) {
    console.log(`ID: ${id}`)
}

//Interfaces
function Points(x: number, y: number, z: number) {
    console.log(`X: ${x} Y: ${y} Z: ${z}`)
}
Points(10,15,20)

interface Pointer {
    x: number,
    y: number,
    z: number
}

function setPoints(obj: Pointer) {
    console.log(`$X:{obj.x} Y:${obj.y} z:${obj.z}`)
}

const coordPointer: Pointer = {
    x: 10,
    y: 15,
    z: 20
}
setPoints(coordPointer)

//Literal Types

let teste : "testando"

//BigInt type

let big:bigint = 100n

//Symbol

let symbolA:symbol = Symbol('A')
let symbolB = Symbol('A')

