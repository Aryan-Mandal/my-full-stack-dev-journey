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

// Assigning an array
let arr = [1, 2, 3, 4, 5];

// Common attributes and functions (methods) related to arrays:

// Attributes:
console.log(arr.length); // Number of elements in the array

// Functions (Methods):
arr.push(6); // Adds element to the end
arr.pop(); // Removes last element
arr.unshift(0); // Adds element to the start
arr.shift(); // Removes first element
arr.includes(3); // Checks if array contains 3
arr.indexOf(2); // Returns index of 2
arr.join("-"); // Joins elements into a string
arr.slice(1, 3); // Returns a shallow copy from index 1 to 2
arr.splice(2, 1); // Removes 1 element at index 2
arr.reverse(); // Reverses the array
arr.sort(); // Sorts the array
arr.concat([7, 8]); // Returns a new array with added elements
arr.map((x) => x * 2); // Returns a new array with function applied
arr.filter((x) => x > 2); // Returns a new array with elements > 2
arr.forEach((x) => console.log(x)); // Executes function for each element
arr.reduce((a, b) => a + b, 0); // Reduces array to a single value

// Mutability explanation:
console.log(
  "Arrays in JavaScript are mutable. You can change their contents (add, remove, or modify elements) after creation."
);
