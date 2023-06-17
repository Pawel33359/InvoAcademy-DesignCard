const designCardImg = document.querySelector(".design-card__img");
const designCardForm = document.querySelector(".design-card__form");

let currentColor = "salmon";

designCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`The ${currentColor} wallet has been added to the cart`);
});

// EVENT DELEGATION FOR CLICKING ON COLORS
designCardForm.addEventListener("click", (e) => {
  const color = e.target.closest(".design-card__color-button");
  if (!color) return;

  //   changeClass(document.body, `body--${currentColor}`, `body--${color.value}`);
  changeClass(
    designCardImg,
    `design-card__img--${currentColor}`,
    `design-card__img--${color.value}`
  );
  currentColor = color.value;
});

const changeClass = (element, prevClass, curClass) => {
  element.classList.remove(prevClass);
  element.classList.add(curClass);
};
