// 50.	Count trailing zeroes in N factorial.

function trailingZero (num) {
    let fact = 1;
    let Count = 0;

    for (let i = 1; i <= num; i++) {
        fact *= i
    }

    while (fact > 0) {
        let digit = fact % 10;
        if (digit === 0) Count++;
        else break;

        fact = Math.floor (fact / 10)
    }

    return Count;
}

console.log (trailingZero (5))
console.log (trailingZero (10))
