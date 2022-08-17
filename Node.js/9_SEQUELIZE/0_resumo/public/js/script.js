let objeto = {tipo:()=>{console.log('Sou um Objeto')}}
function Objeto(tipo){
    return{
        tipo:tipo
    }
}
function outroObjeto(tipo){
    this.tipo = tipo;
}
let objeto2 = Objeto(() => {console.log('Também sou um objeto')})
let objeto3 = new outroObjeto(() => {console.log('Eu também sou um objeto')})


objeto.tipo()
objeto2.tipo()
objeto3.tipo()


let pessoa = {
    nome:'Luccas',
    greet: function () {
        console.log(`Olá ${this.nome}, tenha um bom dia`)
    },
    caracteristicas:{corOlhos:'Castanhos',
corCabelo:'Loiro',
sexo:'M',
idade:26,
isMaiorDeIdade(){
    if(this.idade >= 18){
        return true
    }else{
        return false
    }},
temHabilitacao:true,
podeDirigir(){
    if(this.isMaiorDeIdade() && this.temHabilitacao){
        return true
    }else{
        return false
    }
}
}}

function Arvore(nome,temFruta,nomeFruta=''){
    this.nome = nome;
    this.temFruta = temFruta
    if(this.temFruta){
        this.nomeFruta = nomeFruta;
    }else{
        delete this.nomeFruta;
    }
}

let laranjeira = new Arvore('Laranjeira',true,'Laranja')
let ipe = new Arvore('Ipê',false)

console.log(laranjeira)

function Carro(modelo,ano,tracao,km){
    return{
        modelo:modelo,
        ano:ano,
        tracao:tracao,
        km:km
    }
}
let sorento = Carro('Sorento','2011','4x2','82515')

console.log(sorento)

//ES6 
//Arrow Func

const simpleArrowEx = () => console.log('Esse é um exemplo de Arrow Function')
simpleArrowEx()

//Filter
const nums = [1,2,3,4,5,6,7,8,9]
const biggerThan5 = nums.filter((num)=>{
    if(num>5){
        return num
    }
})
console.table(biggerThan5)
//Map
let randomValues = [2,4,6]
let doubleRandomValues = randomValues.map((value)=> value * 2)
console.table(doubleRandomValues)

//Template Literals
let nome = 'Luccas'
const greet = `Olá meu nome é ${nome}`
console.log(greet)
//Deconstruc

const [i1,i2,i3] = ['banana','maçã','pêra']

console.log(i1)
console.log(i2)
console.log(i3)

const {userName:name,userAge:age,userOccupation:occupation} = {userName:'Luccas',userAge:26,userOccupation:'Programmer'}
console.log(age,name,occupation)

//Spread Operator

const client = ['Cisco','Microsoft','Apple']
const newClients = ['BMW','Toyota']
const allClients = [...client,...newClients]
console.table(allClients)

//