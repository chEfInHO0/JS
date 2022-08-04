//Element Location
const b1 = document.querySelector('.hire')
const b2 = document.querySelector('.beHired')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const msg = document.querySelector('.msg')
const grid1 = document.querySelector('.grid')
const grid2 = document.querySelector('.grid2')
const body = document.querySelector('body')
const limp = document.querySelector('.resizea')
const sist = document.querySelector('.resizeb')
const consult = document.querySelector('.resizec')
const rh = document.querySelector('.resized')
const limp2 = document.querySelector('.resizee')
const sist2 = document.querySelector('.resizef')
const consult2 = document.querySelector('.resizeg')
const rh2 = document.querySelector('.resizeh')
//End Element Location

//Main Page Transition
b1.onmouseover = function hoverHire(){
    body.style.backgroundColor = '#C2DED1'
    b1.classList.add('fullscreen')
    btn1.classList.add('mrg-top')
    b2.classList.add('vanish')
    msg.classList.add('vanish')
    grid1.classList.remove('fog')
}
b1.onmouseout = function hoverHire(){
    b1.classList.remove('fullscreen')
    btn1.classList.remove('mrg-top')
    b2.classList.remove('vanish')
    msg.classList.remove('vanish')
    grid1.classList.add('fog')
}
b2.onmouseover = function hoverHire(){
    body.style.backgroundColor = '#CDC2AE'
    b2.classList.add('fullscreen')
    btn2.classList.add('mrg-top')
    b1.classList.add('vanish')
    msg.classList.add('vanish')
    grid2.classList.remove('fog')
}
b2.onmouseout = function hoverHire(){
    b2.classList.remove('fullscreen')
    btn2.classList.remove('mrg-top')
    b1.classList.remove('vanish')
    msg.classList.remove('vanish')
    grid2.classList.add('fog')
}
//End Main Page Transition

//Main Button Page Transition PJ
btn1.onmouseover = function changeColors() {
    b1.classList.add('hover-div')
    btn1.classList.add('hover-btn')
}
btn1.onmouseout = function changeColors(){
    b1.classList.remove('hover-div')
    btn1.classList.remove('hover-btn')
}
//End PJ

//Main Button Page Transition PF
btn2.onmouseover = function changeColors() {
    b2.classList.add('hover-div')
    btn2.classList.add('hover-btn')
}
btn2.onmouseout = function changeColors(){
    b2.classList.remove('hover-div')
    btn2.classList.remove('hover-btn')
}
//End PF


//Function Declaration
function showInfo(x){
    x.onmouseover = () =>{
        let c= 0
        let teste = x.getElementsByTagName('h4')
        while (c != teste.length){
            teste[c].classList.remove('fog')
            c++
        }
    }
}
function hideInfo(x){
    x.onmouseout = () =>{
        let c= 0
        let teste = x.getElementsByTagName('h4')
        while (c != teste.length){
            teste[c].classList.add('fog')
            c++
        }
}
}
//End Function Declaration

//Info Show/Hide Page PJ
limp.onmouseover = ()=>{
    showInfo(limp)
}
limp.onmouseout = ()=>{
    hideInfo(limp)
}
sist.onmouseover = ()=>{
    showInfo(sist)
}
sist.onmouseout = ()=>{
    hideInfo(sist)
}
consult.onmouseover = ()=>{
    showInfo(consult)
}
consult.onmouseout = ()=>{
    hideInfo(consult)
}
rh.onmouseover = ()=>{
    showInfo(rh)
}
rh.onmouseout = ()=>{
    hideInfo(rh)
}
//End Info Show/Hide PJ

//Info Page Show/Hide PF
limp2.onmouseover = ()=>{
    showInfo(limp2)
}
limp2.onmouseout = ()=>{
    hideInfo(limp2)
}
sist2.onmouseover = ()=>{
    showInfo(sist2)
}
sist2.onmouseout = ()=>{
    hideInfo(sist2)
}
consult2.onmouseover = ()=>{
    showInfo(consult2)
}
consult2.onmouseout = ()=>{
    hideInfo(consult2)
}
rh2.onmouseover = ()=>{
    showInfo(rh2)
}
rh2.onmouseout = ()=>{
    hideInfo(rh2)
}
//End Info Show/Hide PF