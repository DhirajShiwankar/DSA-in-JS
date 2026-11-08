// 48.	Find the prime factorization of a number.

function primeFactor (num) {
    let factor = [];

    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factor.push(i);
            num = num / i
        }
    }
    console.log(factor)
}

primeFactor (60);

