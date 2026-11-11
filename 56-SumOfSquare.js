// 56.	Find the sum of squares from 1 to N.

function SumOfSquare (num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += (i * i)
    }
    return sum;
}

console.log(SumOfSquare (10)) // 385


// another method 
// direct formula : (num * (num + 1) * (2 * num + 1)) / 6

function squaresSum (n) {
    return (n * (1 + n) * ((2 * n) + 1)) / 6
}

console.log(squaresSum (10))
