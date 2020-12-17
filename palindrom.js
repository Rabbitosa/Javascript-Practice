function splitString(string){
    if(string == string.split("").reverse().join("")){
        console.log("This is a plaindrom!");
    } else console.log ("This is not a palindrom.");
};
splitString("hello");