// 64.	Check whether two numbers are coprime.

function coprimeNumber (num1, num2) {
    let min = num1 < num2 ? num1 : num2;
    let gcd = 0;

    for (let i = 1; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    
    if (gcd === 1) {
        return `${num1} and ${num2} is coprime`
    }else {
        return `${num1} and ${num2} is not coprime`
    }
}

console.log (coprimeNumber (12, 18));
console.log (coprimeNumber (15, 8));


// another code 


function coprimeNum (num1, num2) {
    let a = num1;
    let b = num2;
    // let reminder = 0;

    while (b !== 0) {
        let reminder = a % b;
        a = b;
        b = reminder;
    }

    if (a === 1) return `${num1} and ${num2} is coprime`;
    else return `${num1} and ${num2} is not coprime`;
}

console.log(coprimeNum (15, 8));
console.log(coprimeNum (15, 15));
console.log(coprimeNum(12, 18));

// Iteration 1:
// remainder = 12 % 18; // 12
// a = 18;
// b = 12;

// Iteration 2:
// remainder = 18 % 12; // 6
// a = 12;
// b = 6;

// Iteration 3:
// remainder = 12 % 6; // 0
// a = 6;
// b = 0;

// Final result:
// a = 6;
// b = 0;
