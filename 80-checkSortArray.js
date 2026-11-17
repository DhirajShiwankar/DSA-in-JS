// 80.	Check whether an array is sorted.

function sortArray (arr) {
    
    for (let i = 0; i < (arr.length - 1); i++) {
        if (arr[i] > arr[i + 1]) return false;
    }

    return true;
}

console.log (sortArray ([1, 2, 3, 4, 5])) // true
console.log (sortArray ([1, 2, 3, 2, 4, 5])) // false

