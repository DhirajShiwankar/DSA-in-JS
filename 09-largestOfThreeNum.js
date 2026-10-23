// Find the largest of three numbers.

function largest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) return `${num1} num1 is greater`;
    else if (num2 > num1 && num2 > num3) return `${num2} num2 is grater`;
    else return `${num3} num3 is greater`
}

console.log(largest(10, 20, 5));

// or use build-in js methods 

function largest(num1, num2, num3) {
    const max = Math.max(num1, num2, num3);
    return `${max} is the greatest.`;
}

console.log(largest(10, 20, 30)); // Output: 30 is the greatest.