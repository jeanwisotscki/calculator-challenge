const bill = document.querySelector('#inp-bill')
let billValue = 0 // default

bill.addEventListener('input', setBillValue)

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.')
    }

    billValue = Number(bill.value)
    console.log(billValue)
}