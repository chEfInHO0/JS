const timeHolder = document.querySelector('.time-date')
const greetingHolder = document.querySelector('.msg')
const currentState = document.querySelector('.currentState')
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function clock() {
    let date = new Date()
    let year = date.getFullYear()
    let month = (((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1))
    let day = ((date.getDate() < 10 ? '0' : '') + date.getDate())
    let weekDay = date.getDay()
    let hour = ((date.getHours() < 10 ? '0' : '') + date.getHours())
    let minute = ((date.getMinutes() < 10 ? '0' : '') + date.getMinutes())
    let seconds = ((date.getSeconds() < 10 ? '0' : '') + date.getSeconds());
    let info = `${day}/${month}/${year}   ${days[weekDay]} &nbsp; ${hour}:${minute}:${seconds}`
    timeHolder.innerHTML = info
    let msg = `${setGreeting()}, Seja bem vindo(a)`
    let scndmsg = null
    if (setCurrentState() == 'Abertos') {
        currentState.innerHTML = `No momento estamos ${setCurrentState()}&nbsp;&nbsp;<i class="bi bi-door-open-fill"></i>`
        currentState.classList.add('green')
        currentState.classList.remove('red')
    } else {
        currentState.innerHTML = `No momento estamos ${setCurrentState()}&nbsp;&nbsp;<i class="bi bi-door-closed-fill"></i>`
        currentState.classList.add('red')
        currentState.classList.remove('green')
    }
    greetingHolder.innerHTML = msg
}
function setGreeting() {
    let choice
    let date = new Date()
    let hour = date.getHours()
    let greetings = ['Bom dia', 'Boa Tarde', 'Boa noite']
    if (hour < 12 && hour > 6) {
        choice = greetings[0]
    } else if (hour > 12 && hour < 18) {
        choice = greetings[1]
    } else {
        choice = greetings[2]
    }
    return choice

}

function setCurrentState() {
    let state
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let weekDay = date.getDay()
    if (weekDay == 0 || weekDay == 6) {
        state = 'Fechados'
    } else {
        if (hour >= 17 && minute >= 30) {
            state = 'Fechados'
        } else {
            if (hour <= 7 && minute <= 59) {
                state = 'Fechados'
            } else {
                state = 'Abertos'
            }
        }
    }
    return state
}
/*
function setCurrentState(){
    let state
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let weekDay = date.getDay()
    console.log(hour,minute,weekDay)
    console.log(hour<=17)
    console.log(minute >= 30)
    if (weekDay == 0 || weekDay == 6){
        state = 'Fechados'
    }else if(hour<=17 && minute >= 30){
        state = 'Fechados'
    }else if(hour>8 || hour <= 17 && minute <= 29){
        state = 'Abertos'
    }
    else{
        state = 'Fechados'
    }
    console.log(state)
    return state
}
*/

setInterval(clock, 1000)
