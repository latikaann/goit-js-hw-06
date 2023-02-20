// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
const changeColorButton = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");
const body = document.querySelector("body");

changeColorButton.addEventListener("click", onClickButton);

function onClickButton(event) {
  body.style.backgroundColor = getRandomHexColor();
  textSpan.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
