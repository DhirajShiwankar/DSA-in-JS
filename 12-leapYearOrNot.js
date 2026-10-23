// Check whether a year is a leap year.

function checkYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) return `${year} is leap year.`
    else return `${year} is not leap year.`
}

console.log(checkYear(2000))