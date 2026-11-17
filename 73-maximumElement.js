// 73.	Find the maximum element.

function maxElement (arr) {

    if (arr.length === 0) return null;

    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num
        }
    }

    return max;
}

console.log (maxElement ([10, 29, 30, 11, 41, 22]))
