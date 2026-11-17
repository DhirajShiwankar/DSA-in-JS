// 78.	Search for a target using linear search.

function targetSearch (arr, target) {

    for (let num of arr) {
        if (target === num) {
            return `Target found.`
        }
    }
    return `target not found.`
}

console.log(targetSearch ([ 20, 30, 40, 50, 10 ], 10));
