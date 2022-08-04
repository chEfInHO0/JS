const Vagas = ['Vaga 1', 'Vaga 2', 'Vaga 3', 'Vaga 4', 'Vaga 5', 'Vaga 6', 'Vaga 7', 'Vaga 8', 'Vaga 9', 'Vaga 10', 'Vaga 11', 'Vaga 12']
const last = document.querySelector('.back');
const current = document.querySelector('.current');
const next = document.querySelector('.next');
const nextBtn = document.querySelector('.nextBtn')
const backBtn = document.querySelector('.backBtn')
let prox = next.innerHTML;
let exibindo = current.innerHTML;
let ultimoVisto = last.innerHTML;
let nextPosition;

function proxVaga(btn) {
    let isNext = btn.classList.contains('nextBtn')
    if (isNext) {
        current.innerHTML = prox
        ultimoVisto = exibindo
        exibindo = prox
        if (Vagas.indexOf(current.innerHTML) >= (Vagas.length - 1)) {
            prox = Vagas[0]
        } else {
            prox = Vagas[Vagas.indexOf(exibindo) + 1]
        }
        //console.log('NEXT', ' LAST: ', ultimoVisto, 'CURRENT: ', exibindo, 'NEXT: ', prox)

    } else {
        current.innerHTML = ultimoVisto
        exibindo = ultimoVisto
        if (Vagas.indexOf(current.innerHTML) >= (Vagas.length - 1)) {
            prox = Vagas[0]
        } else {
            prox = Vagas[Vagas.indexOf(exibindo) + 1]
        }
        if (Vagas.indexOf(current.innerHTML) <= 0) {
            ultimoVisto = Vagas[Vagas.length - 1]
        } else {
            ultimoVisto = Vagas[Vagas.indexOf(exibindo) - 1]
        }
        //console.log('BACK', ' LAST: ', ultimoVisto, 'CURRENT: ', exibindo, 'NEXT: ', prox)
    }
}

nextBtn.onclick = () => {
    proxVaga(nextBtn)
    current.classList.remove('grow')
    void current.offsetWidth;
    current.classList.add('grow')
    console.log('done')
}
backBtn.onclick = () => {
    proxVaga(backBtn)
    current.classList.remove('grow')
    void current.offsetWidth;
    current.classList.add('grow')
    console.log('done')
    console.log('TESTE BACK')
}