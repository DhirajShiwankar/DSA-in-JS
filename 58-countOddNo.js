// 58.	Count odd digits in a number

function countOddNo (num) {
    num = Math.abs (num);
    let count = 0;

    while (num > 0) {
        let digit = num % 10;

        if (digit % 2 !== 0) {
            count++;
        }
        num = Math.floor (num / 10)
    }

    return count;
}

console.log(countOddNo (1234567)) // 4
