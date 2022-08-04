const morfo = document.querySelector('.morfo')
const type = document.querySelector('.type')
let typeDefault = 'da Empresa'
let nextWords = ['hoje','amanhã','e sempre']
let lastWordKnow = null
let letters = null
let letter = null
let mimic = []
let holder = null
let x = null
let y = null
let count = null

function cleanWord(){
    let w = morfo.innerHTML
    let array = w.split("")
    array.splice((w.length-1),1)
    w = array.join('')
    morfo.innerHTML = w
    if(morfo.innerHTML == ''){
        count ++
    }
    if(count == 3){
        count = 0
        nextWord()
        clearInterval(y)
        x = setInterval(prepareWord,500)
    }   
}
function setWord(){
    if (lastWordKnow == null){
        lastWordKnow = nextWords[0]
        holder = lastWordKnow
    }else{
        nextWord
    }
}
function nextWord(){
    let loc = nextWords.indexOf(lastWordKnow)
    let max = nextWords.length-1
    loc++
    if(loc>max){
        loc = 0
    }else{
        loc = loc
    }
    lastWordKnow = nextWords[loc]
    holder = lastWordKnow

}
function prepareWord(){
    setWord()
    letters = holder.split("")
    letter = letters.splice(0,1)
    holder = letters.join("")
    morfo.innerHTML = morfo.innerHTML.concat(letter)
    if(lastWordKnow.length == morfo.innerHTML.length){
        count++

    }
    if (count == 3){
        count = 0
        window.clearInterval(x)
        y = setInterval(cleanWord,400)
    }
}
function checkVars(){
    console.log('Palavra Atual: ',lastWordKnow)
    console.log('Proximas Letras: ',letters)
    console.log('Letra Atual: ',letter)
    console.log('Variavel de Seg: ',holder)
}

function changeType(btn){
    if(btn.checked){
        type.innerHTML = btn.value
    }
}
x = setInterval(prepareWord,500)