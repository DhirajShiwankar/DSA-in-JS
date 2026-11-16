// 71.	Find the sum of array elements.

function sumOFArrayEle (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

console.log(sumOFArrayEle ([1, 2, 3, 4, 5]));


// ..................................................................

// function sumOfArrayElements(arr) {

//     if (!Array.isArray(arr)) {
//         return "Invalid input.";
//     }

//     let sum = 0;

//     for (let num of arr) {
//         if (typeof num !== "number" || !Number.isFinite(num)) {
//             return "Invalid array element.";
//         }

//         sum += num;
//     }

//     return sum;
// }

// console.log(sumOfArrayElements([1, 2, 3, 4, 5])); // 15
// console.log(sumOfArrayElements([10, 20, 30]));    // 60
// console.log(sumOfArrayElements([]));              // 0
// console.log(sumOfArrayElements([1, -2, 3]));     // 2
