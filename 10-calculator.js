// Build a calculator using switch.

function calculator (inp, num1, num2) {
    switch (inp) {
        case 1: return `${num1} + ${num2} = ${num1 + num2}`;
        case 2: return `${num1} - ${num2} = ${num1 - num2}`;
        case 3: return `${num1} * ${num2} = ${num1 * num2}`;
        case 4:
            if (num2 === 0) return `can't divide by 0`;
            return `${num1} / ${num2} = ${num1 / num2}`;
        default : return `invalid`
    }
}

console.log(calculator(1, 20, 10))
console.log(calculator(2, 20, 10))
console.log(calculator(3, 20, 10))
console.log(calculator(4, 20, 10))