const hire = document.querySelector('.hire')
const hired = document.querySelector('.hired')
const hiredContent = document.querySelector('.content-area-hired')
const hireContent = document.querySelector('.content-area-hire')
const body = document.querySelector('.container-fluid')
const hireLogo = document.querySelector('.logo-area-hire')
const hiredLogo = document.querySelector('.logo-area-hired')
const btnHire = document.querySelector('.hirebtn')
const btnHired = document.querySelector('.hiredbtn')
const safeArea = document.querySelector('.msg')

hire.onmouseover = () => {
    safeArea.classList.replace('show', 'fade')
    hire.classList.replace('holder-area', 'holder-area-hover')
    hired.classList.add('none')
    hireContent.classList.add('content-area-hover')
    body.style.backgroundColor = '#198754'
    hireLogo.classList.replace('fade', 'show')

}
hired.onmouseover = () => {
    safeArea.classList.replace('show', 'fade')
    hired.classList.replace('holder-area', 'holder-area-hover')
    hire.classList.add('none')
    hiredContent.classList.add('content-area-hover')
    body.style.backgroundColor = '#fd7e14'
    hiredLogo.classList.replace('fade', 'show')
}
hire.onmouseout = () => {
    safeArea.classList.replace('fade', 'show')
    hire.classList.replace('holder-area-hover', 'holder-area')
    hired.classList.remove('none')
    hireContent.classList.remove('content-area-hover')
    hireLogo.classList.replace('show', 'fade')
}
hired.onmouseout = () => {
    safeArea.classList.replace('fade', 'show')
    hired.classList.replace('holder-area-hover', 'holder-area')
    hire.classList.remove('none')
    hiredContent.classList.remove('content-area-hover')
    hiredLogo.classList.replace('show', 'fade')
}
btnHired.onmouseover = () => {
    hired.style.backgroundColor = '#fff'
}
btnHired.onmouseout = () => {
    hired.style.backgroundColor = '#fd7e14'
}
btnHire.onmouseover = () => {
    hire.style.backgroundColor = '#fff'
}
btnHire.onmouseout = () => {
    hire.style.backgroundColor = '#198754'
}