// 66.	Find the HCF using Euclid's algorithm.

function hcf(num1, num2) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num2 !== 0) {
        let remainder = num1 % num2;

        num1 = num2;
        num2 = remainder;
    }

    return num1;
}

console.log(hcf(12, 18)); // 6
console.log(hcf(56, 24)); // 8
