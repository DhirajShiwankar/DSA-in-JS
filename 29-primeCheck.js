// 29.	Check whether a number is prime.

function primeCheck (num) {
    if (num <= 1) return `${num} is not prime number.`

    for (let i = 2; i >= num; i++) {
        if (num % i === 0) {
            return `${num} is not prime number`;
        }
    }

    return `${num} is prime number.`
}

console.log(primeCheck(10))
console.log(primeCheck(53))
