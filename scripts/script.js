// values to hold the first number, second number, and operation in an expression. ex: firstNum op secondNum
let firstNum = "";
let secondNum = "";
let op = "";

const displayOb = document.querySelector(".display");
const numbers = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".op");

function add(a, b) {
    // type conversion used to avoid concatenation of the numbers instead of addition
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    let res = b != 0 ? a / b : "Error";
    return res;
}

// computes an operation
function operate(num1, num2, op) {
    let result = "";
    if(op == "add") {
        result = add(num1, num2);
    } else if(op == "subtract") {
        result = subtract(num1, num2);
    } else if(op == "multiply") {
        result = multiply(num1, num2);
    } else if(op == "divide") {
        result = divide(num1, num2);
    }
    return result;
}

// display a number to the screen
function display(res) {
    displayOb.textContent = res;
}

// sets the two numbers to be used in each operation
function setNumber(number) {
    if(op === "") {
        firstNum += number;
        display(firstNum);
    } else if(op !== "") {
        secondNum += number;
        display(secondNum);
    }
}

function handleOperator(operator) {
    // this first if handles operator chaining ex: 12 + 7 - 5 * 3
    // if the first and second number are already populated, the first number becomes the result of the previous operation
    if(firstNum !== "" && secondNum !== "") {
        firstNum = operate(firstNum, secondNum, op);
        display(firstNum);
        op = operator;
        secondNum = ""
    }

    // set the operator to be used
    if(operator === "add" || operator === "subtract" || operator === "multiply" || operator === "divide") {
        op = operator;
        // clear the screen and the numbers, display 0
    } else if(operator === "clear") {
        op = "";
        firstNum = "";
        secondNum = "";
        display(0);
    // calculate the result, display it, and reset the numbers and operation
    } else if(operator === "equal") {
        if(firstNum !== "" && secondNum !== "" && op != "") {
            const res = operate(firstNum, secondNum, op);
            firstNum = res;
            secondNum = "";
            op = "";
            display(res);
        }
    }
}

function addNumberListeners() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            setNumber(number.textContent);
        });
    });
}

function addOperatorListeners() {
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            handleOperator(operator.className.split(" ")[1]);
        });
    });
}

// add the event listeners on page load
addNumberListeners();
addOperatorListeners();