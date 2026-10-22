// Check whether a number is even or odd.

function check (num){
    if (num % 2 === 0) return `${num} is even number`;
    else return `${num} is odd number`;
}

console.log(check(10))