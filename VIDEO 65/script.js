let num = Number(prompt("Enter a non-negative number"));
let i = 1;
let factorial = 1;
if (num > 0) {
  while (i <= num) {
    factorial *= i;
    i++;
  }
  alert(`The factorial of the number is: ${factorial}`);
} else if (num == 0) {
  factorial == 1;
  alert(`The factorial of the number is: ${factorial}`);
} else {
  alert("You entered a negative number which is not allowed");
}
