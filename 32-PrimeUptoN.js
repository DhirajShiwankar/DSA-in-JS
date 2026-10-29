// 32.	Print all prime numbers up to N.

function prime(num) {

    for (let j = 1; j <= num; j++) {

        let isPrime = true;
        if (j <= 1) continue;

        for (let i = 2; i < j; i++) {
            if (j % i === 0) {
                isPrime = false
                break
            }
        }

        if(isPrime) console.log(j)
    }
}

prime(100)
