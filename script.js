function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    if (Number(num2) === 0){
        return "Stop dividing by zero";
    }

    if (Number.isInteger(Number(num1) / Number(num2))){
        return Number(num1) / Number(num2);
    }
    else return parseFloat((Number(num1) / Number(num2)).toFixed(3));
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "x":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

let first_input, second_input, operator = "";
let resultCheck = false;

const display = document.querySelector(".display");
const leftButton = document.querySelectorAll(".left-button");
const rightButton = document.querySelectorAll(".right-button");

leftButton.forEach(element => {
    element.addEventListener("click", function(e) {
        if(resultCheck === true || display.textContent === "Stop dividing by zero"){
            display.textContent = "";
            resultCheck = false;
        }
        display.textContent += e.target.textContent});
});    

rightButton.forEach(element => {
    element.addEventListener("click", function(e) {
        if(resultCheck === true) {
            resultCheck = false};

        if(e.target.textContent == "clr" || display.textContent === "Stop dividing by zero" || display.textContent === "") {
            display.textContent = "";
            return;
        }

        const temp_arr = display.textContent.split(" ")
        if(temp_arr.length === 3){
            const result = operate(temp_arr[1], temp_arr[0], temp_arr[2]);
            display.textContent = "";
            display.textContent += result;
        }

        if(e.target.textContent == "="){
            resultCheck = true;
            return;
        }
        else {
            display.textContent += " " + e.target.textContent + " ";
        }
    });
});