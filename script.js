const billValue = document.querySelector('#bill-input')
const tipValue = document.querySelector('#tip-value')
const peopleInput = document.querySelector('#people-input')



let pessoas
function funcao(valor) {
    pessoas = valor
    return pessoas
}

peopleInput.addEventListener('keyup', () => {
    funcao(peopleInput.value)
})




billValue.addEventListener('keyup', () => {
    const teste = billValue.value
    tipValue.innerHTML = '$' + ((teste * 0.15) / pessoas).toFixed(2)

})