//  Print numbers divisible by both 3 and 5 in a range.

function printNum (start, end) {
    for (let i = start; i <= end; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} is divisible by both.`)
        }
    }
}
printNum(1, 50)
