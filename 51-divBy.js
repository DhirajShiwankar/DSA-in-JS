// 51.	Check whether a number is divisible by 7 and 11.

function divBy (num) {
    for (let i = 1; i <= num; i++) {
        if (i % 7 === 0 && i % 11 === 0) {
            console.log (i)
        }
    }
}

divBy (100)
