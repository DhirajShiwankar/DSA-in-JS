// 36.	Calculate a power without Math.pow.

function power (base, exponent) {
    let result = 1;

    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    console.log (`${base} to the power ${exponent} = ${result} `);
}

power (2, 5) // 2 to the power 5 = 32 
power (3, 3) // 3 to the power 3 = 27 
