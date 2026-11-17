// 77.	Copy an array without using slice().

function copyArray (arr) {
    let copy = [];

    for (let num of arr) {
        copy.push (num)
    }

    return copy;
}

console.log(copyArray ([10, 20, 30, 40, 50]));
