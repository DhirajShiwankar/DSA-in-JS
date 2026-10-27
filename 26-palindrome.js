// 26.	Check whether a number is a palindrome.

function checkPalindrome (num) {
    let original = num
    let reverse = 0;
    num = Math.abs(num);
    
    if (num === 0) return `Enter number greater than 0`;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit
        num = Math.floor(num / 10)
    }

    if (original === reverse) return `${original} is palindrome number.`;
    else return `${original} is not palindrome number.`;
}

console.log(checkPalindrome (1234))
console.log(checkPalindrome (1221))
