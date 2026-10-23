//	Count even and odd numbers from 1 to N

function countEvenOdd (num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            let evencount = i;
        }
        else {
            let oddcount = i;
        }
    }
    console.log(`${evencount} number of even numbers.`);
    console.log(`${oddcount} number of odd numbers.`);
}

countEvenOdd(10)