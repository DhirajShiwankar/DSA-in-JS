// 63. Find the smallest digit.

function smallestDigit(num) {
    num = Math.abs(num);

    if (!Number.isInteger(num)) { // Rejects decimal values
        return "Please enter an integer";
    }

    if (num === 0) return 0;

    let smallest = 9;

    while (num > 0) {
        let digit = num % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        num = Math.floor(num / 10);
    }

    return smallest;
}

console.log(smallestDigit(953315)); // 1
console.log(smallestDigit(8642));   // 2
console.log(smallestDigit(7777));   // 7
console.log(smallestDigit(0));      // 0
console.log(smallestDigit(-582));   // 2
