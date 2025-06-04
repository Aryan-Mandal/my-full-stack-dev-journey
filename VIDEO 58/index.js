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
