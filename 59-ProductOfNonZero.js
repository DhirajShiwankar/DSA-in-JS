// 59.	Find the product of non-zero digits.

function productSum (num) {
    num = Math.abs (num);
    let product = 1;

    while (num > 0) {
        let digit = num % 10;

        if (digit !== 0) {
            product *= digit;
        }
        num = Math.floor (num / 10)
    }

    return product;
}

console.log(productSum (1023045)) // 120
