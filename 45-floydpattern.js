// 45.	Print Floyd's triangle.

function Floyd(n) {
    let num = 1
    
    for (let row = 1; row <= n; row++) {
        let result = "";
        for (let col = 1; col <= row; col++) {
            result += num + " ";
            num++;
        }
        console.log (result)
    }
}

Floyd (5)
