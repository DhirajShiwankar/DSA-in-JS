// Swap two numbers without using a temporary variable.

let num1 = 10;
let num2 = 5;

console.log("Before swap num1: " + num1 + " ,num2: " + num2)

num1 = num1 + num2; // 10 + 5 = 15 num1 = 15
num2 = num1 - num2; // 15 - 5 = 10 num2 = 10
num1 = num1 - num2; // 15 - 10 = 5 num1 = 5 

console.log("After swap num1: " + num1 + " num2: " + num2)