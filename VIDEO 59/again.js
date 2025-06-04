alert("This is a Calculator");
let op = prompt("Enter an operator (+,-,/,*)"); //asks the operator
let x = Number(prompt("Enter your First number: ")); //asks to enter a number
let y = Number(prompt("Enter your Second number: ")); //asks to enter another number
let random = Math.random(); // generates a random number from 0 to 1.
function sum(a, b) {
  if (op === "+" && random > 0.1) {
    return a + b; // if operator is '+' and the random number generated is more than 0.1 than the return value is sum else the else statement is executed.
  } else if (op === "+" && random < 0.1) {
    return a - b;
  }
}
function minus(a, b) {
  if (op === "-" && random > 0.1) {
    return a - b; // if operator is '-' and the random number generated is more than 0.1 than the return value is minus else the else statement is executed.
  } else if (op === "-" && random < 0.1) {
    return a * b;
  }
}
function multiply(a, b) {
  if (op === "*" && random > 0.1) {
    return a * b; // if operator is '*' and the random number generated is more than 0.1 than the return value is multiply else the else statement is executed.
  } else if (op === "*" && random < 0.1) {
    return a / b;
  }
}
function divide(a, b) {
  if (b == 0) return "Can't be devided by Zero'0'.";
  if (op === "/" && random > 0.1) {
    return a / b; // if operator is '/' and the random number generated is more than 0.1 than the return value is divide else the else statement is executed.
  } else if (op === "/" && random < 0.1) {
    return a ** b;
  }
}
function calculator(op, x, y) {
  if (op === "+") return sum(x, y);
  if (op === "-") return minus(x, y); //(calculator is a function made to give the values given by the user to the
  if (op === "*") return multiply(x, y); //functions to give their respective value.)
  if (op === "/") return divide(x, y);
  return "invalid operator!";
}
alert("your answer is: " + calculator(op, x, y));
alert(`Your answer is: ${calculator(op, x, y)} (Operator: ${op}, Random: ${random.toFixed(2)})`);
