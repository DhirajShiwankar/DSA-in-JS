// 61.	Find the sum of digits using a function.

function sumOfDigit (num) {
    num = Math.abs (num);
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor (num / 10)
    }

    return sum;
}

console.log(sumOfDigit (12345));
console.log(sumOfDigit (123456789));
