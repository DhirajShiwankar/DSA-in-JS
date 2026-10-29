// 30.	Find GCD and LCM of two numbers.

function lcm (num1, num2) {
    let greater = (num1 > num2) ? num1 : num2;
    let gcd = 1;

    for (let i = greater; ; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            gcd = i;
            break;
        }
    }
    console.log(`${gcd} is the lcm of the ${num1}, ${num2}`)
}

// console.log(lcm(5, 6))
lcm (5 , 6)
