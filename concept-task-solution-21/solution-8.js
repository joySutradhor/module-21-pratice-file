// 8. তোমার  ফ্রিয়ান্ডলিস্ট  এর  মধ্যে  সবথেকে বড় নামওয়ালা ফ্রেন্ড কে  খুঁজে  বের  করো ?

let friendList = ["joy Sutrahdor", "jon sutradhor", "Manik Talukdar", "Rakhi Sutradhor", "Moumita Das", "Arnob sutradhor", "Sultan Mabbub", "Rakib ahmed",]

let friendsSize = 0 ;
let friendName = "";
for (let i = 0; i< friendList.length; i++){

    if (friendList[i].length>= friendsSize){
        friendsSize = friendList[i].length;
        friendName = friendList[i];
    }
    
}
console.log(friendName);


// Alternative solution

function book (bookList){
    
    let booksize = 0 ;
    let largestBook = "";
    for(let i = 0; i<bookList.length; i++){
        if(bookList[i].length> booksize){
            booksize = bookList[i].length;
            largestBook = bookList[i];
        }
    }
    return largestBook ;
}

let bookName = ["Bangla", "English", "Math", "Ict", "Social science", "Data stucture algorithm"];
let largestBook = book(bookName);
console.log(largestBook);