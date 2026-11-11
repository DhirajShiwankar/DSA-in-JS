// 54.	Convert seconds into hours, minutes, and seconds.

function conver (sec) {
    let hours = Math.floor(sec / 3600);
    let remaining = sec % 3600;

    let minutes = Math.floor (remaining / 60)
    let seconds = remaining % 60;

    console.log (`${hours} : ${minutes} : ${seconds}`)
}

conver(34000)

