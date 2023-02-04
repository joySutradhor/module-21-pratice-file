// ধরো  তুমি  হটাৎ  একদিন  দোকান এ গিয়ে  চাল,ডাল ,তেল   কিনলা  এখন  এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে এই  তিনটা জিনিসের  ক্রয়  মূল্য  বলে  দিলেই  টোটাল  কত  টাকা কিনছো এইটা  বলে  দিবে ।

function products (chal, dal, tel) {
    totalCost = chal + dal + tel ;
    return totalCost;
}

let productsCost = products(140, 165, 200);
console.log("Total products cost is : " ,productsCost);
