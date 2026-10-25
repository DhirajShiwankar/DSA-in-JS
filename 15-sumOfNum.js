// Find the sum of the first N natural numbers.

function numSum (N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return `${sum} sum of first Natural number.`
}
console.log(numSum(10))
