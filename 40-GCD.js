// 40.	Find the GCD of all numbers in an array.

function gcd (num1, num2) {
    let min = num1 < num2? num1 : num2;
    let result = 0;
    for (let i = 1; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result = i;
        }
    }
    return result;
}

console.log(gcd (18, 36));


console.log(`-----------------------------------------------`)

function gcdArray(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }

    return result;
}

console.log(gcdArray([12, 18, 24, 36])); // 6
