// 52.	Find the greatest of four numbers.

function greatest (a, b, c, d) {
    let max = a;

    if (b > max){
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }
    
    return `${max} is the greatest number`;
}

console.log (greatest (10, 29 , 34, 22))


// this is my complex code. Logig is correct
// function greatest (a, b, c, d) {
//     if (a > b && a > c && a > d) {
//         return `${[a, b, c, d]} greater no is ${a}`
//     } else if (b > a && b > c && b > d) {
//         return `${[a, b, c, d]} greater no is ${b}`
//     } else if (c > a && c > b && c > d) {
//         return `${[a, b, c, d]} greater no is ${c}`
//     } else {
//         return `${[a, b, c, d]} greater no is ${d}`
//     }
// }
// console.log (greatest (10, 29 , 34, 22))



// Improved code — Approach 2 (for loop + array)
// function greatest(a, b, c, d) {
//     let arr = [a, b, c, d];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log(greatest(10, 29, 34, 22));
