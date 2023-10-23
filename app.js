const firstName = document.querySelector("#firstname"); // Имя
const lastName = document.querySelector("#lastname"); // Фамилия
const midName = document.querySelector("#midname"); // Отчество

const testQ1 = document.querySelector("#test-one"); // Вопрос из теста №1
const testQ2 = document.querySelector("#test-two"); // Вопрос из теста №2
const testQ3 = document.querySelector("#test-three"); // Вопрос из теста №3
const testQ4 = document.querySelector("#test-four"); // Вопрос из теста №4

const finalTestResult = document.querySelector(".test-result"); // Результат, выводимый пользователю

// Результаты, зависящие от суммы баллов из вопроса в тесте:
const resultIsNotAllowed =
  'Мы пока <span class="red-color">не готовы</span> пригласить вас.';
const resultIsAllowed =
  'Мы <span class="green-color">готовы</span> пригласить вас! Приходите в наше посольство в будни, с 10:00 до 18:00. Не забудьте взять паспорт.';

// Переменные для записи баллов из ответов на вопросы.
let testOneResult;
let testTwoResult;
let testThreeResult;
let testFourResult;

let submitBtn = document.querySelector(".submit-button"); // Кнопка "отправить"

// Функция, рассчитывающая результат:
submitBtn.onclick = (event) => {
  event.preventDefault();

  if (testQ1.value == "да" || testQ1.value == "Да") {
    testOneResult = 0;
  } else if (testQ1.value == "нет" || testQ1.value == "Нет") {
    testOneResult = 1000;
  } else {
    testOneResult = "Error.";
  }

  if (testQ2.value == "да" || testQ2.value == "Да") {
    testTwoResult = 1000;
  } else if (testQ2.value == "нет" || testQ2.value == "Нет") {
    testTwoResult = 0;
  } else {
    testTwoResult = "Error.";
  }

  if (testQ3.value == "да" || testQ3.value == "Да") {
    testThreeResult = 0;
  } else if (testQ3.value == "нет" || testQ3.value == "Нет") {
    testThreeResult = 1000;
  } else {
    testThreeResult = "Error.";
  }

  if (testQ4.value == "да" || testQ4.value == "Да") {
    testFourResult = 0;
  } else if (testQ4.value == "нет" || testQ4.value == "Нет") {
    testFourResult = 1000;
  } else {
    testFourResult = "Error.";
  }

  const totalTestResult =
    testOneResult + testTwoResult + testThreeResult + testFourResult;

  if (totalTestResult > 999) {
    finalTestResult.innerHTML = resultIsNotAllowed;
  } else if (totalTestResult < 999) {
    finalTestResult.innerHTML = resultIsAllowed;
  } else {
    finalTestResult.innerHTML =
      "Ошибка. Проверьте правильность ввода данных по инструкции выше. (все поля должны быть заполнены)";
  }

  console.log(
    `Имя: ${firstName.value}, Фамилия: ${lastName.value}, Отчество: ${midName.value}. Результат:`
  );
};
