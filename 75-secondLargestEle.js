// 75.	Find the second-largest distinct element.

function secondLargestElement (arr) {
    if (arr.length < 2) return null;

    let largest = arr[0];
    let secondLargest = -Infinity; //-Infinity? It allows us to handle negative numbers correctly.

    for (let num of arr) {

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }

        else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity? null : secondLargest;
}

console.log(secondLargestElement ([10, 29, 30, 11, 41, 22])) // 30
console.log(secondLargestElement ([19, 30, 41, 22, 41])) // 30
console.log(secondLargestElement([5, 5, 5])); // null
console.log(secondLargestElement([0, 0, 5])); // 0
