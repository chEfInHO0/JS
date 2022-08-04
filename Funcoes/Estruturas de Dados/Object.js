class Pessoa {
    constructor(nome,sobrenome,idade,sexo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.sexo = sexo
    }
}

const luccas = new Pessoa('Luccas','Santos',27,'M')
console.table(luccas.sexo)