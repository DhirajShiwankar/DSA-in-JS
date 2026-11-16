// 69.	Count the divisors of a number. 
// A divisor is a number that divides another number completely, leaving a remainder of 0.

function divisorNumbers(num) {
    num = Math.abs (num);

    if (!Number.isSafeInteger(num) || num === 0) {
        return "Invalid number.";
    }

    let Count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            Count++;
        }
    }

    return Count;
}

console.log(divisorNumbers (12));
console.log(divisorNumbers(36));  // 9
console.log(divisorNumbers(7));   // 2
console.log(divisorNumbers(-12)); // 6
console.log(divisorNumbers(0));   // Invalid number.
