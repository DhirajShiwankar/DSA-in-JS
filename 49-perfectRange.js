// 49.	Find all perfect numbers in a range.

function perfectNo (num) {
    let result = []
    for (let i = 1; i < num; i++) {
        let sum = 0;

        for (let j = 1; j < i; j++){
            if (i % j === 0) {
                sum += j
            }
        }
        
        if (sum === i) result.push(i) 
    }

    console.log(result)
}

perfectNo (30)
perfectNo (1000)
