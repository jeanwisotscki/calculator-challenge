const billInput = document.querySelector('#bill-input')
const peopleInput = document.querySelector('#people-input')
const tipResult = document.querySelector('#tip-value')
const totalResult = document.querySelector('#total-value')
const tipButton = document.querySelectorAll('#select-tip button')
const resetButton = document.querySelector('#reset-btn')
let tipPercentage


function toggleActiveClass(button) {
    tipButton.forEach((btn) => {
        btn.classList.remove('active')
    })

    button.classList.add('active')
    tipPercentage = button.value
}


resetButton.onclick = () => {
    if (billInput.value === '' || isNaN(billInput.value)) {
        alert('preencha o campo Bill')

    } else if (tipPercentage == 0 || isNaN(tipPercentage)) {
        alert('Selecione a gorjeta')
    }
}


function calculate() {
    resetButton.onclick = () => {

        tipPercentage = Number(tipPercentage)
        const bill = Number(billInput.value)
        const numberOfPeople = Number(peopleInput.value)
        const tipAmount = Number((bill * tipPercentage) / numberOfPeople)
        const total = Number(tipAmount + (bill / numberOfPeople))

        if (billInput.value === '' || isNaN(billInput.value)) {
            alert('preencha o campo Bill')

        } else if (peopleInput.value === '' || isNaN(peopleInput.value)) {
            alert('preencha o campo Number of People')
        }

        if (tipAmount != Infinity && total != Infinity) {
            tipResult.innerHTML = '$' + tipAmount.toFixed(2)
            totalResult.innerHTML = '$' + total.toFixed(2)
        } else {
            tipResult.innerHTML = '$0.00'
            totalResult.innerHTML = '$0.00'
            alert('Please, check that all fields are filled.')
        }



    }
}

tipButton.forEach((btn) => {
    btn.addEventListener('click', () => {

        toggleActiveClass(btn)
        calculate()
    })
})
