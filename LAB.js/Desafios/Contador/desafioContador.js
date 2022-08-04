/*const contador = document.querySelector('#contador');
let numAtual = null;
function increase(){
    numAtual = (Number(contador.innerHTML )+ 1)
    contador.innerHTML = numAtual
}
function decrease(){
    numAtual = (Number(contador.innerHTML )- 1)
    if(numAtual <= 0){
        contador.innerHTML = 0
    }else{
        contador.innerHTML = numAtual 
    }
}
function resetCount(){
    contador.innerHTML = 0;
}*/
let count = 0
const contador = document.querySelector('#contador')
const btns = document.querySelectorAll('.btn')
btns.forEach(btn => btn.addEventListener('click',(e) => {
    const styles = e.currentTarget.classList
    if(styles.contains('increase')){
        count++
        contador.textContent = count
        checkColor()
    }else if(styles.contains('decrease')){
        count--
        contador.textContent = count
        checkColor()
    }else{
        count = 0
        contador.textContent = count
        checkColor()
    }

}))
function checkColor(){
    if (count == 0){
        contador.classList.remove('red')
        contador.classList.remove('green')
        contador.classList.add('black')
    }else if(count > 0){
        contador.classList.remove('black')
        contador.classList.remove('red')
        contador.classList.add('green')
    }else{
        contador.classList.remove('green')
        contador.classList.remove('black')
        contador.classList.add('red')
    }
}