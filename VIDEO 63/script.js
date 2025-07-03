// Assigning an array
let arr = [1, 2, 3, 4, 5];

// Common attributes and functions (methods) related to arrays:

// Attributes:
console.log("arr.length:", arr.length); // Number of elements in the array

// Functions (Methods):
console.log("arr.push(6):", arr.push(6), "| arr:", arr); // Adds element to the end
console.log("arr.pop():", arr.pop(), "| arr:", arr); // Removes last element
console.log("arr.unshift(0):", arr.unshift(0), "| arr:", arr); // Adds element to the start
console.log("arr.shift():", arr.shift(), "| arr:", arr); // Removes first element
console.log("arr.includes(3):", arr.includes(3), "| arr:", arr); // Checks if array contains
console.log("arr.indexOf(2):", arr.indexOf(2), "| arr:", arr); // Returns index of 2
console.log('arr.join("-"):', arr.join("-"), "| arr:", arr); // Joins elements into a string
console.log("arr.slice(1, 3):", arr.slice(1, 3), "| arr:", arr); // Returns a shallow copy from index 1 to 2
console.log("arr.splice(2, 1):", arr.splice(2, 1), "| arr:", arr); // Removes 1 element at index 2
console.log("arr.reverse():", arr.reverse(), "| arr:", arr); // Reverses the array
console.log("arr.sort():", arr.sort(), "| arr:", arr); // Sorts the array
console.log("arr.concat([7, 8]):", arr.concat([7, 8]), "| arr:", arr); // Returns a new array with added elements
console.log(
  "arr.map(x => x * 2):",
  arr.map((x) => x * 2),
  "| arr:",
  arr
); // Returns a new array with function applied
console.log(
  "arr.filter(x => x > 2):",
  arr.filter((x) => x > 2),
  "| arr:",
  arr
); // Returns a new array with elements > 2
console.log("arr.forEach(x => console.log(x)) output:");
arr.forEach((x) => console.log(x)); // Executes function for each element
console.log(
  "arr.reduce((a, b) => a + b, 0):",
  arr.reduce((a, b) => a + b, 0),
  "| arr:",
  arr
); // Reduces array to a single value

// Mutability explanation:
console.log(
  "Arrays in JavaScript are mutable. You can change their contents (add, remove, or modify elements) after creation."
);

// --- Array Methods: Mutating vs Non-Mutating ---
// Mutating methods (change the original array):
//   push(), pop(), shift(), unshift(), splice(), reverse(), sort(), fill(), copyWithin()
//   (Tip: Methods that add, remove, or reorder elements usually mutate the array)
//
// Non-mutating methods (do NOT change the original array):
//   slice(), concat(), map(), filter(), reduce(), forEach(), includes(), indexOf(), join()
//   (Tip: Methods that return a new array or value, and don’t sound like they change the structure, are usually non-mutating)
//
// Memory trick: Only splice (not slice) mutates. If it sounds like it’s “cutting” or “changing”, it’s likely mutating.
// -----------------------------------------------------

// --- Looping over arrays: for, for...in, for...of ---
// Using the arr array:

console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(`Index ${i}:`, arr[i]);
}
// Use when you need the index or want to control iteration steps.

console.log("Using for...in loop:");
for (let index in arr) {
  console.log(`Index ${index}:`, arr[index]);
}
// for...in is intended for objects, but works on arrays (indexes as strings).
// Can pick up inherited properties, so use with caution on arrays.

console.log("Using for...of loop:");
for (let value of arr) {
  console.log("Value:", value);
}
// Best for arrays when you only need the values, not the indexes.
// ---------------------------------------------
