// Calculate factorial using a loop.

function factorial (n) {
    if (n <= 0) return `factorial is not define by 0 or negative numbers.`
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    return `${fact} factorial of ${n}`;
}
factorial(5)