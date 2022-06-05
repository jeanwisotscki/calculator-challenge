const billInput = document.querySelector("#bill");
const tipsOptions = document.querySelectorAll(".tip");
const customTip = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector("#number-people");
const btnReset = document.querySelector(".btn-reset");
let activeTip;

// ativada via click no event listener do btnReset
function handleCalculate() {
  const billValue = Number(billInput.value);
  const tipValue = Number(activeTip.value);
  const peopleNumber = Number(numberOfPeopleInput.value);

  if (billValue && tipValue && peopleNumber) {
    const tip = billValue * (tipValue / 100);
    const tipAmount = tip / peopleNumber;
    const totalPerson = (billValue + tip) / peopleNumber;

    handleResults(tipAmount, totalPerson);
  }
}

function handleResults(tipAmount, totalPerson) {
  const tipAmountSpan = document.querySelector("#tip-amount");
  const totalPersonSpan = document.querySelector("#total-person");

  tipAmountSpan.innerText = `$${tipAmount.toFixed(2)}`;
  totalPersonSpan.innerText = `$${totalPerson.toFixed(2)}`;
}

// faz o toggle da classe 'active' à opção de gorjeta selecionada
function handleActiveTip(tip) {
  tip.addEventListener("click", () => {
    tipsOptions.forEach((tip) => {
      tip.classList.remove("active");
      tip.children[0].classList.remove("active");
      customTip.value = "";
    });
    tip.classList.add("active");
    tip.children[0].classList.add("active");

    // seleciona a gorjeta com a classe 'active'
    if (tip.classList.contains("active")) {
      activeTip = tip.children[0];
    }
  });
}

tipsOptions.forEach((tip) => {
  handleActiveTip(tip);
});

// validação para os inputs (ativada direto no html)
function isNumber(event) {
  event = event ? event : window.event;
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

/* Event Listeners
 **************************************************/

btnReset.addEventListener("click", handleCalculate);

// remove o disabled do botão
billInput.addEventListener("input", () => {
  if (billInput.value) {
    btnReset.removeAttribute("disabled");
  }
});

// efeito focus na div do input bill
const billInputDiv = document.querySelector(".bill-input");
billInput.addEventListener("focusin", () => {
  billInputDiv.classList.add("active");
});
billInput.addEventListener("focusout", () => {
  billInputDiv.classList.remove("active");
});

// efeito focus na div do input number of people
const personInputDiv = document.querySelector(".person-input");
numberOfPeopleInput.addEventListener("focusin", () => {
  personInputDiv.classList.add("active");
});
numberOfPeopleInput.addEventListener("focusout", () => {
  personInputDiv.classList.remove("active");
});
