const notasAluno = [6,7,8,9,5,5,4,10];


// nomeDoArray.reduce((a,b) => a + b)
// a -> variavel que acumula o valor total que no caso sera a somatoria dos valores
// b -> variavel que vai receber o valor de cada iteracao no array

const somaNotas = notasAluno.reduce((sum,nota) => sum + nota);
console.log(somaNotas);