// 65.	Calculate factorial using recursion.
// Recursion is a programming technique in which a function calls itself to solve a problem.

function factorial (num) {
    if (num === 0 || num === 1) return 1;
    return (num * factorial(num - 1))
}

console.log (factorial (5)) // 120



// 1. First understand factorial
// Factorial of 5 means:
// 5 × 4 × 3 × 2 × 1 = 120


// But how does JavaScript calculate this using recursion?
// 2. Step 1: Function starts
// You call: factorial(5);


// JavaScript sees: return 5 * factorial(4);

// But it doesn't know the answer of factorial(4) yet.

// So it goes inside the same function again.
// 3. Step 2: Function calls itself

// Now JavaScript calculates:
// factorial(5) = 5 × factorial(4)
// factorial(4) = 4 × factorial(3)
// factorial(3) = 3 × factorial(2)
// factorial(2) = 2 × factorial(1)
// factorial(1) = 1


// Important: When JavaScript reaches factorial(1), it gets the answer 1 because of this condition:
// if (num === 0 || num === 1) return 1;


// This is called the base case. It tells recursion when to stop.
// 4. Step 3: Now calculate backwards
// Think of it like this: JavaScript has reached 1. Now it starts completing the calculations it was waiting for.
// Let's calculate together
// FIRST

// factorial(1)
// 1
// Base case gives us 1.


// SECOND
// factorial(2)
// (2 * 1 = 2)
// 2


// THIRD
// factorial(3)
// (3 * 2 = 6)
// 6


// FOURTH
// factorial(4)
// (4 * 6 = 24)
// 24


// FIFTH
// factorial(5)
// (5 * 24 = 120)
// 120


// 5. Now understand this one line
// return num * factorial(num - 1);


// It has two jobs:
// 1. factorial(num - 1) calls the same function with a smaller number.
// 2. num * multiplies the current number by the answer returned from that function.
// For example:
// factorial(5)
// = 5 * factorial(4)
// = 5 * 24
// = 120


// Remember this simple concept:
// - Recursion first goes down: 5 → 4 → 3 → 2 → 1.
// - Then it comes back: 1 → 2 → 6 → 24 → 120.
