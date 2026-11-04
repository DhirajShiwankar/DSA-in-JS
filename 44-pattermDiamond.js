// 44.	Print a diamond pattern.

function diamond (n) {
    for (let row = 1; row <= n; row++) {
        let star = "";

        // space
        for (let col = 1; col <= (n - row); col++) {
            star += " ";
        }

        // star
        for (let col = 1; col <= (2 * row - 1); col++) {
            star += "*";
        }

        console.log (star)
    }

    for (let row = 2; row <= n; row++) {
        let star = "";

        // space
        for (let col = 1; col <= row - 1; col++) {
            star += " ";
        }

        // star
        for (let col = 1; col <= 2 * (n - row) + 1; col++) {
            star += "*";
        }

        console.log (star)
    }
}

diamond (5)
