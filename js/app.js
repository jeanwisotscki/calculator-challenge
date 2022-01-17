const bill = document.querySelector('#inp-bill')
const people = document.querySelector('#inp-people')

let peopleValue = 1 // default


bill.addEventListener('input', setBillValue)

let billValue = 0 // default

function validateFloat(value) {
    let rgx = /^[0-9]*\.?[0-9]*$/

    return value.match(rgx)
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.')
    }

    if (!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length - 1)
    }

    billValue = Number(bill.value)
}