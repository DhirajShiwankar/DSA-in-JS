// 41.	Print an inverted right triangle.

function invertPattern (n) {
    for (let i = 0; i < n; i++) {
        let star = "";
        for (let j = 0; j < (n-i); j++) {
            star += "*";
        }
        console.log(star)
    }
}

invertPattern (5)

// *****
// ****
// ***
// **
// *
