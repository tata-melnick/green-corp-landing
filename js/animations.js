// animation header

const header = document.querySelector("header");
let animationInited = false;

const updateScroll = window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header__scrolled");
  } else {
    header.classList.remove("header__scrolled");
  }

  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector(".feedback__clients-count").offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
});

function addSmoothScroll(anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector(".hero__btn"));

// Animation section feautures

const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i += 100;

    setTimeout(function () {
      increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}
function initIncreaseNumberAnimation() {
  const element = document.querySelector(".feedback__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation();

// Animation section form
const formGroups = document.querySelectorAll(".form__group");
const lastFormGroup = formGroups[formGroups.length - 1];
const budgetSelect = document.querySelector("#budget");

const input = document.createElement("input");
input.classList.add("form__group-input", "form__other-input");
input.placeholder = "Введите ваш вариант";
input.type = "text";
input.style.marginTop = "20px";

budgetSelect.addEventListener("change", (e) => {
  if (e.target.value === "other") lastFormGroup.append(input);
  else {
    const otherInput = document.querySelector(".form__other-input");
    otherInput && lastFormGroup.removeChild(otherInput);
  }
});
