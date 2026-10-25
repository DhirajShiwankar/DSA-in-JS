// Print a right triangle using stars.

function star (n) {
    for(let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1 ; j <= i; j++){
            row += "*"
        }
        console.log(row)

    }
}

star(5)