// Check whether a number is positive, negative, or zero.

function check (num) {
    if (num > 0) return `${num} is positive.`;
    else if (num < 0) return `${num} is negative.`;
    else return `${num} is zero.`
}

console.log(check(10));
console.log(check(-10));
console.log(check(0));