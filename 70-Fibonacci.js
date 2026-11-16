// 70.	Find the nth Fibonacci number iteratively.

function FibonacciNth (num) {
    
    if (!Number.isInteger(num) || num < 0) return `invalid input.`;

    if (num === 0 || num === 1) return num;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(FibonacciNth(0));  // 0
console.log(FibonacciNth(1));  // 1
console.log(FibonacciNth(2));  // 1
console.log(FibonacciNth(6));  // 8
console.log(FibonacciNth(10)); // 55
console.log(FibonacciNth(-5)); // Invalid input.
