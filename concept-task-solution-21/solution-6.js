// 6. উপরের  এই  অবজেক্ট  থেকে  তোমার  প্রিয় মানুষটির ফ্রিয়ান্ডলিস্ট চেক  করে  দেখো । কত  জন ফ্রেন্ড  আছে ? 

function favoritePerson (){
    let person = {
        Name : "Jon sutradhor",
        Age : 23 ,
        Friends : ["piyas", "joy", "shuvro", "rajon", "ratul", "ripon"],
        Study : "Degree",    
    }
    let friendsArray = [];
    for (let i = 0; i<person.Friends.length; i++){
        let personFriends = person.Friends[i];
        friendsArray.push(personFriends);
    }
    return friendsArray;
}

let person = favoritePerson();
console.log(person);
console.log(person.length);


console.log(typeof("adcdsf"));
