const billInput = document.querySelector("#bill");
const tipsOptions = document.querySelectorAll(".tips .tip");
console.log(tipsOptions);

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
