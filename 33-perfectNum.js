// 33.	Check a perfect number

// A perfect number is a number equal to the sum of its positive factors, excluding itself.
// Example: num = 6
// Factors excluding 6: 1, 2, 3
// Sum: 1+2+3=6
// Therefore, 6 is a perfect number.

function pernectNum(num) {
    let original = num;
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (original === sum) console.log(`${num} is perfect number.`)
    else console.log(`${num} is not perfect number.`)

}

pernectNum (25)
pernectNum (6)
pernectNum (28)
