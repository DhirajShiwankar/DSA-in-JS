// 46.	Find the digital root of a number.

function rootNo(n) {
    // Keep looping as long as 'n' has more than 1 digit
    while (n > 9) {
        let sum = 0;
        
        // Sum the digits of the current 'n'
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        
        // Assign the sum back to 'n' to check if it's a single digit yet
        n = sum; 
    }
    
    return n;
}

console.log(rootNo(9875)); // Output: 2

// For example, with 9875:
// First pass: 9 + 8 + 7 + 5 = 29 
// Second pass: 2 + 9 = 11
// Third pass: 1 + 1 = 2
