let name = "Luccas";
let num = 11223344;
let code = 0123;
function card_verification(card_name,card_num,card_code){
    let valid_name;
    let valid_num;
    let valid_code;
    let verification;
    if (card_name === 'Luccas'){
        console.log('Nome correto')
        valid_name = true;
    }else{
        console.log('Nome errado')
        valid_name = false;
    }
    if(card_num == num){
        console.log('Numero correto')
        valid_num = true;
    }else{
        console.log('Numero errado')
        valid_num = false;
    }
    if(card_code == code){
        console.log('CVC correto')
        valid_code = true;
    }else{
        console.log('CVC errado')
        valid_code = false;
    }
    if(valid_name === true && valid_num === true && valid_code === true){
        verification = true;
    }else{
        verification = false;
    }
    console.log(verification)
}

card_verification('Luccas',1122344,0123)