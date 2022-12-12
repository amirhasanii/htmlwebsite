const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let displayValue = '0',
    firstOperand = null,
    secondOperand = null,
    firstOperator = null,
    secondOperator = null,
    result = null;

function updateDisplay() {
    display.value = displayValue;
    if (display.length < 9) {
        display.value = displayValue.substring(0, 9);
    }
}
updateDisplay();

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

function inputDecimal(dot) {
    if (displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot;
    } else if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
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


buttons.forEach((button) => {
    button.addEventListener('click', function () {
        if (button.id === 'number') {
            inputOperand(button.value);
            updateDisplay()
        }
        else if (button.id === 'operator') {
            inputOperator(button.value);
        }
        else if (button.id === 'equal') {
            inputEquals();
            updateDisplay();
        }
        else if (button.id === 'decimal') {
            inputDecimal(button.value);
            updateDisplay();
        } else if (button.id === 'clear') {
            clr();
            updateDisplay();
        }
    })
});

function inputOperand(operand) {
    if (firstOperator === null) {
        if (displayValue == '0' || displayValue === 0) {
            displayValue = operand
        } else if (displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if (displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}
function inputOperator(operator) {
    if (firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(parseFloat(firstOperand), parseFloat(secondOperand), firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else if (firstOperator != null && secondOperator != null) {
        secondOperand = displayValue;
        result = operate(parseFloat(firstOperand), parseFloat(secondOperand), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else {
        firstOperator = operator;
        firstOperand = displayValue;
    }
}
function inputEquals() {
    if (firstOperator === null) {
        displayValue = displayValue;
    } else if (secondOperator != null) {
        secondOperand = displayValue;
        result = operate(parseFloat(firstOperand), parseFloat(secondOperand), secondOperator);
        if (result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondOperand = displayValue;
        result = operate(parseFloat(firstOperand), parseFloat(secondOperand), firstOperator);
        if (result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}

function clr() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}
function del() {
    displayValue = displayValue.slice(0, -1)
    updateDisplay()
}

