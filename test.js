function fat(x){
    let num = x
    let soma = 1
    for (let c = 1;x!=1;c++){
        soma *= x
        x--
    }
    console.log(`Fatorial de ${num} = ${soma}`)
}

fat(4)