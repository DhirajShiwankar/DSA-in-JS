// 37.	Generate a Fibonacci series.

let a = 0;
let b = 1;
let next = 0;

for (let i = 0; i < 10; i++) {
    next = a + b;
    a = b;
    b = next

    console.log(next)
}
