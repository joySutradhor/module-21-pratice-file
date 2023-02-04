// 7. এখন  দেখো ফ্রিয়ান্ডলিস্ট এ   কতজন ছেলে  ফ্রেন্ড  আছে ?

function myFriends (input){
    let person = {
        Name: "Jon sutradhor",
        Age: 23,
        Friends: [
            { Name: "Laboni", Gender: "Female", Age: 24, Class: "honers" },
            { Name: "Hridoy Das", Gender: "Male", Age: 25, Class: 12 },
            { Name: "Jon Das", Gender: "Male", Age: 23, Class: 11 },
            { Name: "Sriti Roy", Gender: "Female", Age: 20, Class: 10 },
            { Name: "Sita Sarker", Gender: "Female", Age: 18, Class: 5 },
            { Name: "Jhumur Das", Gender: "Female", Age: 14, Class: 2 },
            { Name: "joy Das", Gender: "Male", Age: 25, Class: 14 },
            { Name: "shuvro Das", Gender: "Male", Age: 20, Class: 12 },
            { Name: "Mitu Sarker", Gender: "Female", Age: 21, Class: 12 }
        ],
        Study: "Degree",
    }
    
    let black = [];
    for (i = 0; i < person.Friends.length; i++) {
        let personData = (person.Friends[i]);
        if (personData.Gender == input) {
            black.push(personData.Name);
        }
    }
    return black;
}
console.log(myFriends("Female"));
console.log(myFriends("Male"));





// ? Alternative 

let Friends = [
    {name: 'jon Sutradhor', Gender: "Male"},
    {name: 'Laboni Roy', Gender: "Female"},
    {name: 'Sriti Das', Gender: "Female"},
    {name: 'Mou Sarker', Gender: "Female"},
    {name: 'Joy Sutradhor', Gender: "Male"}
];

let NewFriends = [];
for (let i = 0; i < Friends.length; i++) {
    if (Friends[i].Gender == "Female") {
        NewFriends.push(Friends[i]);
    }
}
// console.log(NewFriends);
// console.log(NewFriends.length);

