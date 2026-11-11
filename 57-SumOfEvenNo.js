// 57.	Find the sum of even digits

function sumOfEvenDigits(num) {
    num = Math.abs(num);
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;

        if (digit % 2 === 0) {
            sum += digit;
        }

        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfEvenDigits(12345678)); // 20
console.log(sumOfEvenDigits(2468));     // 20
console.log(sumOfEvenDigits(13579));    // 0
