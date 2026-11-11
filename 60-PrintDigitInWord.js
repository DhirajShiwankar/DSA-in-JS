// 60.	Print a single digit in words (0–9).

function printNo (num) {
    num = Math.abs (num)

    switch (num) {
        case 0:
            console.log (`${num} : Zero`)
            break;
        case 1:
            console.log (`${num} : One`)
            break;
        case 2:
            console.log (`${num} : Two`)
            break;
        case 3:
            console.log (`${num} : Three`)
            break;
        case 4:
            console.log (`${num} : Four`)
            break;
        case 5:
            console.log (`${num} : Five`)
            break;
        case 6:
            console.log (`${num} : Six`)
            break;
        case 7:
            console.log (`${num} : Seven`)
            break;
        case 8:
            console.log (`${num} : Eight`)
            break;
        case 9:
            console.log (`${num} : Nine`)
            break;

        default:
            console.log (`Number is not between 0 and 9`)
    }

}

printNo (8) // 8 : Eight
printNo (0) // 0 : Zero
printNo (5) // 5 : Five
printNo (10) // Number is not between 0 and 9

// another code

console.log ("-----------------------------------------------------------")

function printNo1(num) {

    // !Number.isInteger(num) → Is it a decimal or non-integer?

    if (!Number.isInteger(num) || num < 0 || num > 9) {
        return "Enter a single digit between 0 and 9";
    }

    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
    }
}

console.log(printNo1(8));  // Eight
console.log(printNo1(0));  // Zero
console.log(printNo1(15)); // Enter a single digit between 0 and 9
console.log(printNo1(-3)); // Enter a single digit between 0 and 9
