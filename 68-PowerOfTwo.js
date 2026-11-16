// 68.	Check whether a number is a power of two.

function powerOfTwo(num) {
    let power = 0;

    if (!Number.isSafeInteger(num) || num <= 0) {
        return false;
    }

    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }

        num = num / 2
    }
    return true;
}

console.log(powerOfTwo(12))
console.log(powerOfTwo(16))
