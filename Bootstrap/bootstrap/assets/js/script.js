const hire = document.querySelector('.hire')
const hired = document.querySelector('.hired')
const body = document.querySelector('body')
const helper = document.querySelector('.helper')
const help = document.querySelector('.help')
const btnh = document.querySelector('.hireBTN')
const btnhd = document.querySelector('.hiredBTN')
const msg = document.querySelector('.msg')

hire.onmouseover = () => {
    hire.classList.add('y')
    btnh.classList.replace('col-6', 'col-12')
    hired.classList.add('none')
    body.style.backgroundColor = 'cyan'
    msg.classList.replace('show', 'fade')

}
hired.onmouseover = () => {
    hired.classList.add('x')
    btnhd.classList.replace('col-6', 'col-12')
    hire.classList.add('none')
    body.style.backgroundColor = 'darkcyan'
    msg.classList.replace('show', 'fade')
}
hire.onmouseout = () => {
    hire.classList.remove('y')
    btnh.classList.replace('col-12', 'col-6')
    hired.classList.remove('none')
    msg.classList.replace('fade', 'show')

}
hired.onmouseout = () => {
    hired.classList.remove('x')
    btnhd.classList.replace('col-12', 'col-6')
    hire.classList.remove('none')
    msg.classList.replace('fade', 'show')

}