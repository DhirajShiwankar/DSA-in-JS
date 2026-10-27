// 27.	Find the largest digit.

function largestDigit (num) {
    let original = num;
    let largest = 0;
    num = Math.abs(num)

    while (num > 0) {
        let digit = num % 10;

        if (digit > largest) {
            largest = digit
        }
        num = Math.floor(num / 10)
    }
    return `${largest} largest digit in the ${original}`
}

console.log(largestDigit(123643))
