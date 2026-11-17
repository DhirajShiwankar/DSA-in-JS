// 79.	Count occurrences of a target.

function countTarget (arr, target) {
    let count = 0;

    for (let num of arr) {
        if (target === num) {
            count++;
        }
    }

    return count;
}

console.log(countTarget([10, 29, 34, 10, 40, 10], 10));
