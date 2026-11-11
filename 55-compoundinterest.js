// 55.	Calculate compound interest.

// formula ci = Principal * (1 + rate %) ^ time - Principal

function CompoundInterest (p, r, t) {
    let ci = (p * (1 + (r / 100)) ** t) - p;
    return ci;
}

console.log (CompoundInterest (1000, 10, 2)) // 210.00000000000023
