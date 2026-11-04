// 43.	Print a pyramid pattern.

function pyramid(n) {
    for (let row = 1; row <= n; row++) {
        let pattern = "";

        // Spaces
        for (let col = 1; col <= n - row; col++) {
            pattern += " ";
        }

        // Stars
        for (let col = 1; col <= 2 * row - 1; col++) {
            pattern += "*";
        }

        console.log(pattern);
    }
}

pyramid(5);
