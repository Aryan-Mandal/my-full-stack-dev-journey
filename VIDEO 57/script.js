console.log("this is a programme ");
// What is the for loop syntax?
for (let i = 0; i <= 100; i++) {
  console.log(i);
}
// WHat is the while loop syntax?
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// What is the do while loop syntax?
let j = 10;
do {
  console.log(j);
  j++;
} while (j < 10);

// When should you use for and while loop?

// For loop is used when an identifier is already known or is not taken from a user.

// While loop is used when an identifier is not known while writing a loop, it may be taken as an input
// from the user.

let o = {
  name: "aryan",
  class: 12,
  section: "A",
};
for (const key in o) {
  console.log(key);
}
let A = [10, 20, 30];
for (const num of A) {
  console.log(num);
}
