function automorphic(num) {
    let square = num * num;
    let original = num;

    while (num > 0) {
        if (num % 10 !== square % 10) {
            return `${original} is not an Automorphic Number`;
        }

        num = Math.floor(num / 10);
        square = Math.floor(square / 10);
    }

    return `${original} is an Automorphic Number`;
}

console.log(automorphic(5));
console.log(automorphic(6));
console.log(automorphic(25));
console.log(automorphic(7));
