// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.


function findLeapYear (year) {

    let leapYear = [];
for (let i = 0; i<year.length; i++){
    if (year[i] % 4 == 0 && year[i] % 100 !== 0) {
        leapYear.push(year[i]);
    }
    else if (year[i] % 400 == 0) {
        leapYear.push(year[i]);
    }
}
return leapYear;

}

let years = [2023,2024,2025,2028,2030, 1900, 1700, 1600] ;
let isLeapYear = findLeapYear (years);
console.log(isLeapYear);


// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।


function leapYear (year) {
    if (year % 4 == 0 && year % 100 !== 0) {
        return true ;
    }
    else if (year % 400 == 0){
        return true ;
    }
    else {
        return false ;
    }

}

let isLeapYears = leapYear(2023);
console.log(isLeapYears) ; 