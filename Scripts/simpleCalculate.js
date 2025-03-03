function simpleCalculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const operations = {
    add,
    subtract,
    multiply,
    divide
}
const selectedOperation = "divide";

console.log(simpleCalculate(6, 3, operations[selectedOperation]));

////////////////////////////////////////////////////////////////////////

// function simpleCalculate(num1, num2, operation) {
//     return operation(num1, num2);
// }

// const operations = {
//     add: (num1, num2) => num1 + num2,
//     subtract: (num1, num2) => num1 - num2,
//     multiply: (num1, num2) => num1 * num2,
//     divide: (num1, num2) => num2 !== 0 ? num1 / num2 : 'Ошибка: Деление на ноль'
// };

// const selectedOperation = "divide";

// console.log(simpleCalculate(6, 3, operations[selectedOperation]));
// console.log(simpleCalculate(6, 0, operations[selectedOperation]));