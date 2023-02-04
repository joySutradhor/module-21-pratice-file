// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function findOddSum(oddnumbers) {


    let sum = 0;
    for (let i = 0; i < oddnumbers.length; i++) {
        if (oddnumbers[i] % 2 !== 0) {
            sum = sum + oddnumbers[i];
        }
    }
    return sum;

}

let oddsArray = [5, 7, 8, 10, 45, 30, 3];
let oddsum = findOddSum(oddsArray);
console.log(oddsum);

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function check (age) {

    if (age % 2 == 0) {
        return true;
    }
    else {
        return false ;
    }

}

let isOddOrEven = check (27);
console.log(isOddOrEven);