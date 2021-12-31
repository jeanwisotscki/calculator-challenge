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

function calculate() {
    resetButton.onclick = () => {

        tipPercentage = Number(tipPercentage)
        const bill = Number(billInput.value)
        const numberOfPeople = Number(peopleInput.value)
        const tipAmount = Number((bill * tipPercentage) / numberOfPeople)
        const total = Number(tipAmount + (bill / numberOfPeople))

        tipResult.innerHTML = '$' + tipAmount.toFixed(2)
        totalResult.innerHTML = '$' + total.toFixed(2)

        console.log(typeof bill)
        console.log(typeof numberOfPeople)
        console.log(typeof tipPercentage)
        console.log(typeof tipAmount)
        console.log(typeof total)
    }
}

tipButton.forEach((btn) => {
    btn.addEventListener('click', () => {

        toggleActiveClass(btn)
        calculate()
    })
})
