let activeTip;
const billInput = document.querySelector("#bill");
const tipsOptions = document.querySelectorAll(".tip");
const customTip = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector("#number-people");

const btnCalculate = document.querySelector(".btn-calculate");

const billErrorSpan = document.querySelector("#bill-error");
const tipErrorSpan = document.querySelector("#tip-error");
const peopleErrorSpan = document.querySelector("#people-error");

// adiciona a classe error nos inputs que estiverem vazios
function handleErrorClass(element) {
  element.classList.add("error");
  setTimeout(() => {
    element.classList.remove("error");
  }, 3000);
}

// ativada via click no event listener do btnCalculate
function handleCalculate() {
  const billValue =
    billInput.value !== "" && billInput.value > 0
      ? Number(billInput.value)
      : handleErrorClass(billErrorSpan);
  const tipValue =
    activeTip.value !== "" && activeTip.value > 0
      ? Number(activeTip.value)
      : handleErrorClass(tipErrorSpan);
  const peopleNumber =
    numberOfPeopleInput.value !== "" && numberOfPeopleInput.value > 0
      ? Number(numberOfPeopleInput.value)
      : handleErrorClass(peopleErrorSpan);

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
  if (event) {
    const charCode = event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}

/* Event Listeners
 **************************************************/

btnCalculate.addEventListener("click", handleCalculate);

// remove o disabled do botão
document.addEventListener("input", () => {
  if (billInput.value && numberOfPeopleInput.value) {
    btnCalculate.removeAttribute("disabled");
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
