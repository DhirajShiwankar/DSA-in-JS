//  Print the multiplication table of a number.

function table (num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`);
    }
}

table(32)
console.log(`----------------------------`)
table(19)