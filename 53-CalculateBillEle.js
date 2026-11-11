// 53.	Calculate an electricity bill using slab rates.

function bill (unit) {
    let totalBill = 0;

    if (unit <= 100) {
        totalBill = unit * 2;
    } 
    if (unit <= 200) {
        totalBill = (100 * 2) + ((unit - 100) * 3)
    } 
    if (unit <= 300) {
        totalBill = (100 * 2) + (100 * 3) + ((unit - 200) * 5)
    } 
    else {
        totalBill = (100 * 2) + (100 * 3) + (100 * 5) + ((unit - 300) * 7)
    }

    console.log(totalBill)
}

bill (250)
