function playSecretNumberGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Загаданное число: ${secretNumber}`);

  let lowerBound = 1;
  let upperBound = 100;
  let guess;

  while (lowerBound <= upperBound) {
    // Находим среднее значение
    guess = Math.floor((lowerBound + upperBound) / 2);

    console.log(`Компьютер 2: Пробую число ${guess}.`);

    if (guess === secretNumber) {
      console.log("Компьютер 1: Угадал!");
      break; // Угадали число
    } else if (guess < secretNumber) {
      console.log("Компьютер 1: Больше.");
      lowerBound = guess + 1; // Искать в верхней половине
    } else {
      console.log("Компьютер 1: Меньше.");
      upperBound = guess - 1; // Искать в нижней половине
    }
  }
}
// Запуск игры
playSecretNumberGame();
