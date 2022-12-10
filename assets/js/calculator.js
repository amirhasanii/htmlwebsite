const numberButton = document.querySelectorAll('#number');
const operatorButton = document.querySelectorAll('#operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals-key');

currentOperand.value = '';
previousOperand.value = '';

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}
currentOperand.value = 0;
let storedNumber = '',
    clickedOperator = '',
    firstNumber = '',
    result = '';

numberButton.forEach((number) => {
    number.addEventListener('click', function () {

        storedNumber += number.value;
        currentOperand.value = storedNumber;
        console.log('you clicked nr ', number.value)
    })
});

operatorButton.forEach((operator => {
    operator.addEventListener('click', function () {
        if (firstNumber && storedNumber) {
            displayResult();
        }
        firstNumber = storedNumber;

        clickedOperator = operator.value;
        previousOperand.value = storedNumber + clickedOperator;
        storedNumber = '';

        console.log(`First nr ${firstNumber} Stored ${storedNumber}`);
        console.log(`Clicked operator ${clickedOperator}`);

    })
}))
equalsKey.addEventListener('click', function () {
    displayResult();
});
function displayResult() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)

    currentOperand.value = result;
    previousOperand.value = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
    storedNumber = result;
    console.log(`First nr ${firstNumber} Stored ${storedNumber}`);

}
function clr() {
    previousOperand.value = '';
    currentOperand.value = 0;
    firstNumber = '';
    storedNumber = '';
}
function del() {
    currentOperand.value = currentOperand.value.slice(0, -1)
}

