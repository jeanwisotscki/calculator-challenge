const spanError_1 = document.querySelector('#span-error-1')
const spanError_2 = document.querySelector('#span-error-2')
const billInput = document.querySelector('#bill-input')
const peopleInput = document.querySelector('#people-input')
const btnReset = document.querySelector('#reset-btn')


function selectTipButton() {
    const tipButtons = document.querySelectorAll('#select-tip button')

    function handToggle(btn) {
        tipButtons.forEach((btn) => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
    }

    tipButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            handToggle(btn)
        })
    })
}
selectTipButton()

function toggleErrorClasses() {


    if (billInput.value == '' || billInput.value <= 0) {
        spanError_1.classList.add('error-span')
        billInput.classList.add('error-input')

    } else if (peopleInput.value == '' || peopleInput.value <= 0) {
        spanError_2.classList.add('error-span')
        peopleInput.classList.add('error-input')

    } else {
        spanError_1.classList.remove('error-span')
        billInput.classList.remove('error-input')
        peopleInput.classList.remove('error-input')
        spanError_2.classList.remove('error-span')
    }

}

btnReset.addEventListener('click', toggleErrorClasses)