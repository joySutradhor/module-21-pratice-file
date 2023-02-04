// 9. ধরো  তুমি  থাইল্যান্ড  বা  অন্য  কোথাও  একটা  হোটেল এ থাকতে  গেলা এখন  হোটেল  কর্তৃপক্ষ  কে  ভাড়া  জানতে  চাইলে  সে  বললো 

// যদি  আমাদের  হোটেল এ আপনি ১-১০ দিন  থাকেন  তাহলে  ভাড়া ৫০০ টাকা/ডে 

// যদি ২০ দিন  থাকেন তাহলে ১০ দিনের পরে দিন  থেকে ২০ দিন  পর্যন্ত ৩০০ টাকা/ডে 

// আপনি  যদি  এক  মাস  থাকেন  তাহলে  ২০ দিনের  পরের যত দিন  থাকবেন  ভাড়া ১০০টাকা /ডে 

// এখন  তুমি  যদি ২৫ দিন  থাকো  তাহলে  ভাড়া  কত  টাকা  আসবে ?

function expences (days) {
    if(typeof days === "string"){
        return "please enter a number"

    }
    else if (days <= 10) {
        fisrt10Days = days * 500 ;
        return fisrt10Days ;
    }
    else if (days>10 && days<= 20){
        second10Days = days -10 ;
        second10DaysCost = second10Days * 300 ;
        next20Dayscost = second10DaysCost + 10*500;
        return next20Dayscost ;
        
    }
    else if (days>20){
        totalthirdDays = days - 20 ;
        anyDays = totalthirdDays * 100;
        totalCost = 10*500 + 10*300 + anyDays ;
        return totalCost ;
    }

    else {
        return "Enter number of Days you want to stay"
    }


}

let totalDays = expences(24);
console.log(totalDays);
