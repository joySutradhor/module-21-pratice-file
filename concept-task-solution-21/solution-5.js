// 5. এখন  একটা  রি-ইউজেবল  ফাঙ্কশন  লিখো   যাকে  তুমি  শুধু  (চেস্ট ,বাইসেপ ,ট্রাইসেপ ) এইগুলা  দিয়ে  ডাক  দিলে  সে  তোমাকে  ডিটেলস  ওয়ার্কআউট দিয়ে  দিবে । 

function workout (Exercises) {
 let chest = ["1. Traditional Pushups" , "2. Scapular Pushups", "3. Wide Grip Chest Press", "4.Incline Bench Press", "6.Cable Chest Flys"];

let biceps = ["1.Barbell", "2.Cable curl", "3.Dumbbell", "4.chin-Up", "5.Reverse-Grip", "6.Hammer Curl"];

let triceps = ["1. Close-grip Bench Press", "2. Rope Tricep Pushdown", "3. Tricep Dips", "4. Isolated Triceps Extension", "5. Skullcrushers"];

 if (Exercises == "chest") {
    return chest ;
}
 if (Exercises == "biceps") { 
    return biceps ;
}
 if (Exercises == "triceps") {
    return triceps ;
}
else{
    return "There is no exits your Data";
}

}
let mySteps = workout("triceps");
console.log(mySteps);
