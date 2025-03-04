const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function (num) { // Не стрелочная функция, для примера
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, function (num) { // Не стрелочная функция, для примера
    return num > 3;
});
console.log(greaterThanThree); // [4, 5]

function myFilter(array, callback) {
    const result = [];

    array.forEach(function(element) {
      if (callback(element)) {
        result.push(element);
      }
    });

    return result;
  }

// Вариант с for

// function myFilter(array, callback) {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (callback(element)) {
//             result.push(element);
//         }
//     }

//     return result;
// }