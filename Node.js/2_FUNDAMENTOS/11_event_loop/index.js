function a(){
    console.log('Executando a funcao a')
}
function b(){
    console.log('Executando a funcao b')
}
function c(){
    console.log('Executando a funcao c')
    b()
    a()
}

c()