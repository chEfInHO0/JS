let frutas = ['Abacaxi'];

//push(a) -> adiciona a para o final do array
frutas.push('Uva');
frutas.push('Morango');
frutas.push('Laranja');
//unshift(a) -> adiciona a no incio do array
frutas.unshift('Mamão');
console.log(frutas)
//pop() -> remove o ultimo elemento do array por padrao
frutas.pop();
console.log(frutas)
//shift() -> remove o primeiro elemento do array por padrao
frutas.shift();
console.log(frutas)
//splice(a,b,c) -> remove b elementos a partir do index a, (c é opcional ele substitui os elementos removidos em b)
const frutaDeletada = frutas.splice(2,1);
console.log(frutaDeletada);
console.log(frutas)