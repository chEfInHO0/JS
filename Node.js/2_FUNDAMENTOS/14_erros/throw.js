const x = 'a'

if (!Number(x)){
    throw new Error('O valor de X tem que ser um numero')
}else{
    console.log('Continuando')
}