let current_result = "";
let setnum;
let setopr;
let status = {
    numberOne: "", numberTwo: "", operator: false, currentResult: ""
};
let numbers = document.getElementsByClassName("calculator_numbers");
let operators = document.getElementsByClassName("calculator_operators");
let resultBox = document.getElementById("result");
let equal_ele = document.querySelector(".calculator_equal");
let clear = document.querySelector(".calculator_clear");

// let history = document.getElementById("history");

function setNumber() {
    for (let number of numbers) {
        number.addEventListener("click", (e) => {
            let num = e.target.value;
            status.currentResult += num;
            showResult(status.currentResult);
        });
    }
}

setNumber();

for (let operator of operators) {
    operator.addEventListener("click", (event) => {
        let opr = event.target.value;
        setopr = opr;
        showResult(setopr);
        status.numberOne = status.currentResult;
        status.currentResult = "";
    });
}

equal_ele.addEventListener("click", () => {
    status.numberTwo = status.currentResult;
    status.currentResult = "";
    if(status.numberOne === "" || status.numberTwo === ""){
        return;
    }
    calc(status.numberOne, status.numberTwo);
    status.numberOne = "";
    status.numberTwo = "";
});

function calc(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (setopr === "+") {
        status.currentResult = num1 + num2;
    } else if (setopr === "−") {
        status.currentResult = num1 - num2;
    } else if (setopr === "×") {
        status.currentResult = num1 * num2;
    } else {
        status.currentResult = num1 / num2;
    }
    status.currentResult = status.currentResult.toString();
    showResult(status.currentResult);
}

function showResult(x) {
    resultBox.value = x;
}

clear.addEventListener("click",(e)=>{
    status.numberOne = "";
    status.numberTwo = "";
    status.operator = false;
    status.currentResult = "";
    showResult("");
});




