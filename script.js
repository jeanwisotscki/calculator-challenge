const billValue = document.querySelector('#bill-input')
const tipValue = document.querySelector('#tip-value')
const peopleInput = document.querySelector('#people-input')
const tipButton = document.querySelectorAll('#select-tip button')
const resetButton = document.querySelector('#reset-btn')


function selectTipButton() {

    function toggleActiveClass(button) {
        tipButton.forEach((button) => {
            button.classList.remove('active')
        })

        button.classList.add('active')
        console.log(button.value)
    }

    tipButton.forEach((button) => {
        button.addEventListener('click', () => {
            toggleActiveClass(button)
        })
    })
}
selectTipButton()








resetButton.addEventListener('click', () => {
    const soma = document.querySelector('#total-value')
    soma.innerHTML = '$' + ((billValue.value * 0.15) / peopleInput.value).toFixed(2)
})












