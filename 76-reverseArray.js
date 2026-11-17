// 76.	Reverse an array in place.

function ReverseArray (arr) {
    let left = 0; 
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

console.log (ReverseArray ([10, 20, 30, 40, 50]))





// function ReverseArray (arr) {
//     let reverse = [];

//     for (let i = (arr.length - 1); i >= 0; i--) {
//         reverse.push(arr[i])
//     }
//     console.log (reverse)
// }

// ReverseArray ([1,2,3,4,5,6])
