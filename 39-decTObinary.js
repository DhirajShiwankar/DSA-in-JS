// 39.	Convert decimal to binary.

function decToBinary (n) {
    let binary = "";

    if (n === 0)  return `0`;

    while (n > 0) {
        let remainder = n % 2;
        binary = remainder + binary;
        n = Math.floor (n / 2);
    }

    return `${n} decimal to binary ${binary}`
}

console.log(decToBinary(10))
