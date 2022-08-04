const task = document.querySelector('.task');
const tasks = document.querySelector('.tasks');
const info = []
function createCounter(){
    let c = null
    if (info.length != 0){
        c = (info[info.length-1][1] + 1)
    }else{
        c = 0
    }
    return c
}
function addTask(){
    let c = createCounter()
    let currentTask = task.value
    if(currentTask != ''){
        info.push([currentTask,c])
        let taskRow = tasks.insertRow()
        let firstCell = taskRow.insertCell()
        firstCell.classList.add('name')
        firstCell.innerHTML = currentTask
        secondCell = taskRow.insertCell()
        secondCell.innerHTML = '<input type="checkbox" class="check" onclick="completeTask()">'
        thirdCell = taskRow.insertCell()
        thirdCell.innerHTML = `<button class="del ${c}" onclick="deleteTask(this)">Deletar</button>`
        task.value = ''
    }else{
        alert('A tarefa não pode estar vazia')
    }
}
function completeTask(){
    const check = document.querySelectorAll('.check');
    for (let c=0;c<check.length;c++){
        if (check[c].checked){
            tasks.rows[c].cells[0].classList.add('striketxt')
        }else{
            tasks.rows[c].cells[0].classList.remove('striketxt')
        }
    }
}
function deleteTask(botao){
    let index = botao.classList
    info.splice(index[1],1)
    tasks.deleteRow(index[1])
    console.table(info)
    let buttonsLeft = document.querySelectorAll('.del')
    for (let c=0; c<buttonsLeft.length ; c++){
        console.log(c)
        let loc = buttonsLeft[c].classList
        loc.replace(`${loc[1]}`,`${c}`)
        info[c][1] = c
    }


}