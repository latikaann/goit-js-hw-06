//Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать
// и уменьшать его значение на единицу.

// +++ Создай переменную counterValue в которой будет храниться текущее значение счетчика
//  и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
// счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
//
//
const refs = {
  totalValue: document.querySelector("#value"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementtBtn: document.querySelector('button[data-action="increment"]'),
};
let counterValue = 0;
refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementtBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick(event) {
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  counterValue -= 1;

  refs.totalValue.textContent = counterValue;
}
function onIncrementBtnClick(event) {
  counterValue += 1;

  refs.totalValue.textContent = counterValue;
}
