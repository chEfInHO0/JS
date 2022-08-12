//String
var nome = 'Luccas';
//Number
var idade = 26;
//Boolean
var maiorDeIdade = true;
//Arrays
//String
var nomes = ['Luccas', 'João', 'Maria'];
var outrosNomes = ['Marcos', 'Ana', 'Fernanda'];
//Number
var idades = [26, 22, 21];
var outrasIdades = [20, 22, 22];
///Boolean
var eMenino = [true, true, false, true, false, false];
var eMenina = [false, false, true, false, true, true];
//Any - Variavel que aceita qualquer tipo de dado
var qualquerCoisa = ['Luccas', 26, true, [], {}];
//Tipagem de argumentos
function soma(a, b) {
    console.log(a + b);
}
//tipagem de retorno
function soma2(a, b) {
    return a + b;
}
//tipagem de objetos
var pessoa = { nome: 'Luccas', sobrenome: 'Santos', idade: 26 };
//parametros opicionais
function media(a, b, c) {
    if (c) {
        console.log(a + b + c);
        return a + b + c;
    }
    else {
        console.log(a + b);
        return a + b;
    }
}
media(2, 2, 3);
media(4, 6);
