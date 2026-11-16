// 67.	Calculate the LCM using the GCD

function LCM(num1, num2) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    let a = num1;
    let b = num2;

    let min = num1 < num2 ? num1 : num2;
    let gcd = 0;

    while ( b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    let lcm = (num1 * num2) / a;
    return lcm;

}

console.log(LCM(12, 18));
console.log(LCM(10, 15));
