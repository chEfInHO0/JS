const name = document.querySelector('#name')
const shadowName = document.querySelector('#shadowName')
const table = document.querySelector('#table')
const modal = document.querySelector('.laylow')
let usedIndex = null
function createRow(){
    let row = table.insertRow()
    let cell = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()
    cell.textContent = name.value
    cell2.innerHTML = `<button class="delBtn" onclick="deleteLine(this)">Deletar</button>`
    cell3.innerHTML = `<button class="updtBtn" onclick="updateLine(this)">Alterar</button>`
}
function deleteLine(btn){
    const btns = document.getElementsByClassName('delBtn')
    let index = [...btns].indexOf(btn) // get the index of the clicked button
    table.deleteRow(index)
}
function updateLine(btn){
    modal.classList.remove('low')
    const btns = document.getElementsByClassName('updtBtn')
    usedIndex = [...btns].indexOf(btn) // get the index of the clicked button
    shadowName.value = table.rows[usedIndex].cells[0].textContent


}
function update(){
    table.rows[usedIndex].cells[0].textContent = shadowName.value
    usedIndex = null
    modal.classList.add('low')
}