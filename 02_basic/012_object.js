//  let user = new Object(); // "object constructor" syntax also called singleton 

//  let user = {};  // "object literal" syntax

const mySym=Symbol("key1"); //Create a Symbol (optional string description for debugging)

const user={
    name:"aryan",
    "full name":"aryan gupta",
    age:21,
    location:"ballia",
    email:"aryan@gmail.com",
    isLoggedIn:true,
    lastLogginDay:["mon","tue","wed"],
    [mySym]:"mykey1" // Bracket notation is required here

}

// console.log(user,"\n");
// console.log(user["full name"]);

// console.log(user.lastLogginDay);
// console.log(user.lastLogginDay[0]); // can access the element fro the array

// console.log(user["isLoggedIn"]);
// console.log(user[mySym]); // Accessing the property also requires bracket notation


user.email="prince@gmail.com"

// console.log(user.email);

// Object.freeze(user)  // is is use to make your object immutable
user.email="prince123@gmail.com"


//creating function in an object
user.greeting = function(){
    console.log("hello user");
}

console.log(user.greeting()); 

user.greetingtwo = function(){
    console.log(`hello user : ${user["full name"]}`);
}
console.log(user.greetingtwo());
