let op = prompt("chose an operator (+,-,*,/)");
let x = Number(prompt("chose first number"));
let y = Number(prompt("chose second number"));
let random = Math.random();
if(random<0.1){
    function sum(a,b){
        return a-b;
    }
    function subtract(a,b){
        return a*b;
    }
    function multiply(a,b){
        return a/b;
    }
    function divide(a,b){
        return a**b;
    }
}
else{
    function sum(a,b){
        return a+b;
    }
    function subtract(a,b){
        return a-b;
    }
    function multiply(a,b){
        return a*b;
    }
    function divide(a,b){
        return a/b;
    }
}
console.log(random)
function calculator(op,x,y) {
    if(op === "+") return sum(x,y);
    if(op === "-") return subtract(x,y);
    if(op === "/") return multiply(x,y);
    if(op === "*") return divide(x,y);
}
alert("your answer is "+ calculator(op,x,y))
console.log("your answer is "+ calculator(op,x,y))
// let op = prompt("Choose an operator (+, -, *, /)");
// let x = Number(prompt("Choose first number"));  // Convert to number
// let y = Number(prompt("Choose second number")); // Convert to number
// let random = Math.random();  // Random number between 0 and 1

// // Declare functions OUTSIDE of blocks
// function sum(a, b) {
//     return random < 0.1 ? a - b : a + b;
// }
// function subtract(a, b) {
//     return random < 0.1 ? a * b : a - b;
// }
// function multiply(a, b) {
//     return random < 0.1 ? a / b : a * b;
// }
// function divide(a, b) {
//     return random < 0.1 ? a ** b : a / b;
// }

// // Calculator function that uses operator
// function calculator(op, x, y) {
//     if (op === "+") return sum(x, y);
//     if (op === "-") return subtract(x, y);
//     if (op === "*") return multiply(x, y);
//     if (op === "/") return divide(x, y);
//     return "Invalid operator";
// }

// console.log("Random: " + random);
// let result = calculator(op, x, y);
// alert("Your answer is " + result);
// console.log("Your answer is " + result);
