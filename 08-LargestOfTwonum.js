// Find the largest of two numbers.

function largest(num1, num2) {
    if (num1 === num2) {
        return `${num1} num1 and ${num2 } num2 are the same number`;
    }
    return num1 > num2 ? `${num1} num1 is greater` : `${num2} num2 is greater`;
}

console.log(largest(20, 20))