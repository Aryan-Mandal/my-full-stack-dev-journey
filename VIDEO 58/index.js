function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function remainder(a, b) {
  return a % b;
}
function exponent(a, b) {
  return a ** b;
}
function calculation(op, x, y) {
  if (op === "+") return add(x, y);
  if (op === "-") return subtract(x, y);
  if (op === "*") return multiply(x, y);
  if (op === "/") return divide(x, y);
  if (op === "%") return remainder(x, y);
  if (op === "**") return exponent(x, y);
}
console.log(calculation("+", 50, 30));
console.log(calculation("-", 50, 30));
console.log(calculation("*", 50, 30));
console.log(calculation("/", 50, 30));
console.log(calculation("%", 50, 30));
console.log(calculation("**", 10000000, 1));

// Define functions. Along with Syntax

// A function is a block of code designed to perform a specific task, and can be called whenever needed.

//SYNTAX..

function functionName(parameters) {
  //code;
}

// example1:
greet("Aryan");
function greet(name) {
  console.log("Hello " + name + "!");
} // Output: Hello Aryan!

//example2:
let num1 = 5;
let num2 = 10;
function add(num1, num2) {
  return num1 + num2; // return adds num1 and num2 and returns the value to add variable.
}
console.log(add);
