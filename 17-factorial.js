function calculateFactorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers.";
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiplies result by each number up to n
    }
    return result;
}

console.log(calculateFactorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(calculateFactorial(0)); // Output: 1 (0! is 1)
