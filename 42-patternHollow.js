// 41.	Print a hollow square pattern.

function patterHollow (n) {
    for (let row = 1; row <= n; row++) {
        let star = "";

        for (let col = 1; col <= n; col++) {
            if (row === 1 || row === n || col === 1 || col === n) {
                star += " * "
            } else {
                star += "   "
            }
        }
        console.log(star)
    }
}

patterHollow (5)
