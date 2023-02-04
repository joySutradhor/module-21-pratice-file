// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

function hourToMinutes (time) {
    let totalMinutes = time * 60 ;
    return totalMinutes ;
}

let hours = hourToMinutes(5);
console.log("Total minutes is : ",hours);