console.log("hi this is Code..");
let age = prompt("what is your Age");
if (age > 18) {
  console.log("you are eligible for driving");
} else if (age == 18) {
  console.log("you can get a license");
} else if (age == 0 || age < 0) {
  console.log("are you kidding?");
} else {
  console.log("you are not eligible for driving");
}

// If else statements in JavaScript?
//
//  if(condition){
//code
//}
//  if(condition){        [What would happen if two if statements are used?]
//code             Ans. Both will be applied if true.
//}                             As else if and else statements are neglected if the preceding
//  else if(condition){             condition is true.
//code
//}
//  else{
//code
//}
