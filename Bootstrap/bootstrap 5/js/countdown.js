const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function clock() {
    let end = new Date("Jul 25,2022 17:30:00").getTime()
    let now = new Date().getTime()
    let secondsLeft = Math.floor((end-now)/1000)
    let minuteLeft = Math.floor(secondsLeft/60)
    console.log(minuteLeft)
}

setInterval(clock, 1000)
