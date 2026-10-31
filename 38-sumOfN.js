// 38.	Find the sum 1 + 2 + ... + N.

function sumOfN (n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return `sum of 1 to ${n} = ${result}`
}

console.log(sumOfN (10));
