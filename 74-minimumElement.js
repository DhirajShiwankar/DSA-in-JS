// 74.	Find the minimum element.

function minimumArrayElement (arr) {
    if (arr.length === 0) return null;

    let min = arr[0];

    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

console.log(minimumArrayElement ([10, 8, 3, 1, 22, 20])); // 1
console.log(minimumArrayElement ([10, 8, 3, 0, 22, 20])); // 0
console.log(minimumArrayElement([-10, -50, 20, 0])); // -50
