const x = 'a'
try{
    if (!Number(x)){
        throw new Error('X tem que ser um numero')
    }else{
        console.log('Continuando Codigo')
    }
}catch(err){
    console.log('Erro Encontrado',err)
}