//	Count even and odd numbers from 1 to N

function countEvenOdd (num) {
    let evencount = 0;
    let oddcount = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evencount++;
        } else {
            oddcount++;
        }
    }
    console.log(`${evencount} number of even numbers.`);
    console.log(`${oddcount} number of odd numbers.`);
}

countEvenOdd(10)