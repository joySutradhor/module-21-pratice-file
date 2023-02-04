// 4. এমন  একটা  ফাঙ্কশন  লিখবে  যাকে  তুমি কিলোমিটার  দিলে  সে  তোমাকে এ মাইল এ কনভার্ট  করে  দিবে |

function toMile (km) {
    let miles = km * 0.621371;
    return miles ;
}

let totalmiles = toMile(1);
console.log("Total miles is : " , totalmiles.toFixed(5));