// 23.	Count the digits of a number.

function countDigit (num) {
    let count = 0;
    let original = num;
    num = Math.abs(num) // built-in JavaScript method that returns the absolute value of a number. -123 to 123

    if (num === 0){
        return `${num} is count is 1`
    }

    while (num > 0) {
        count++; // Increases the digit counter by one.
        num = Math.floor(num / 10) // Removes the last digit from the number
    }
    return `${original} count digit of the number is ${count}`;
}

console.log (countDigit(1234))