// 31.	Print all factors of a number.

function factors (num) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i)
        }
    }
}

factors(12)
