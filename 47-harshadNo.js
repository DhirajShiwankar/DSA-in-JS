// 47.	Check a Harshad number

// 18 is a Harshad number:
// Sum of digits: 1 + 8 = 9
// Check division: 18 % 9 = 0 (18 is divisible by 9)

function HarshadNo (n) {
    let original = n;
    let sum = 0;
    
    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        n = Math.floor (n / 10)
    }

    if (original % sum === 0) return `${original} is harshad number.`;
    else return `${original} is not harshad number`;
}

console.log(HarshadNo (18))
