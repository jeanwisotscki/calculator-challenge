const billInput = document.querySelector("#bill");
const tipsOptions = document.querySelectorAll(".tips .tip");
const customTip = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector("#number-people");

console.log(billInput);

// adiciona a classe 'active' à opção de gorjeta selecionada
function handleActiveTip(tip) {
  tip.addEventListener("click", () => {
    tipsOptions.forEach((tip) => {
      tip.classList.remove("active");
      tip.children[0].classList.remove("active");
      customTip.value = "";
    });
    tip.classList.add("active");
    tip.children[0].classList.add("active");
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
