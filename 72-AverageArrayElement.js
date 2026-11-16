// 72.	Find the average of array elements.

function averageArrayEle (arr) {

    if (!Array.isArray(arr) || arr.length === 0) return `Invalid input.`
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    let average = sum / arr.length;
    return average;
}

console.log(averageArrayEle ([1, 4, 6, 7, 3]));
