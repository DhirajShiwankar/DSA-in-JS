// 34. Check a Strong Number 
// A Strong Number is a number whose sum of the factorials of its digits equals the original number.

// Example: 145
// - 1! = 1
// - 4! = 4 * 3 * 2 * 1 = 24
// - 5! = 5 * 4 * 3 * 2 * 1 = 120
// Sum: 1 + 24 + 120 = 145

// Therefore, 145 is a Strong Number.

function strongNum (num) {
    let sum = 0;
    let original = num;
    
    if (num <= 0) return `number is less than zero or zero`;

    while (num > 0) {
        let fact = 1;
        let digit = num % 10;

        for (let i = 1;  i <= digit; i++) {
            fact = fact * i;
        }

        sum = sum + fact;
        num = Math.floor(num / 10)
    }
    
    if (original === sum) console.log(`${original} is the stron number.`);
    else console.log(`${original} is not the stron number.`);
}

strongNum (145)
