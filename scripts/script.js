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

function display(res) {
    displayOb.textContent = res;
}

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
    if(operator === "add" || operator === "subtract" || operator === "multiply" || operator === "divide") {
        op = operator;
    } else if(operator === "clear") {
        op = "";
        firstNum = "";
        secondNum = "";
        display(0);
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

// call these in a setup function
addNumberListeners();
addOperatorListeners();




