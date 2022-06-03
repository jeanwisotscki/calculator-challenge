const billInput = document.querySelector("#bill");
const tipsOptions = document.querySelectorAll(".tips .tip");
const numberOfPeopleInput = document.querySelector("#number-people");

console.log(billInput);

tipsOptions.forEach((tip) => {
  tip.addEventListener("click", () => {
    tipsOptions.forEach((tip) => {
      tip.classList.remove("active");
      tip.children[0].classList.remove("active");
    });
    tip.classList.add("active");
    tip.children[0].classList.add("active");
  });
});

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
