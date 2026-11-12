// 62.	Find the product of digits.

function productOfDigit (num) {
    num = Math.abs (num);
    let product = 1;

    while (num > 0) {
        let digit = num % 10;
        product *= digit;
        num = Math.floor (num / 10)
    }

    return product;
}

console.log(productOfDigit (12345)) // 120
console.log(productOfDigit (1203)) // 0
