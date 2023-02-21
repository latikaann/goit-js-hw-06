function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.
//
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
//
//

// 1) Размеры самого первого <div> - 30px на 30px.
// 2) Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3) Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.
//======================== привязать к хтмл
const input = document.querySelector("#controls>input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const newBoxes = document.querySelector("#boxes"); //сюда добавить

// console.log(newBoxes);
//======================== слушатели
//
createButton.addEventListener("click", onCreateBtnClick);
destroyButton.addEventListener("click", onDestroyBtnClick);
//

//
function createBoxes(amount) {
  let newArray = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newArray.push(newDiv);
  }
  newBoxes.append(...newArray);
}

function onCreateBtnClick() {
  createBoxes(input.value);
}

function onDestroyBtnClick() {
  newBoxes.innerHTML = "";
}
