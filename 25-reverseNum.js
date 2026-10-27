// 25.	Reverse a number

function reveseNumber (num) {
    let original = num;
    let revese = 0;

    num = Math.abs(num);

    while (num > 0) {
        let digit = num % 10; // extract last digit of number 
        revese = revese * 10 + digit // ex 0 * 10 + 1 = store in reverse
        num = Math.floor(num / 10) // remove last digit
    }
    return `${original} reverse number is ${revese}`
}

console.log (reveseNumber(1234))
