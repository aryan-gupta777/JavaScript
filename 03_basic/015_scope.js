//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=5
    // console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ----------Scoping in a browser and scoping in Node.js are different at the top level----------------




function addone(num){
    return num+1;
}
console.log(addone(5));


console.log(addtwo(6))// will show error (hosting)

const addtwo=function(num){  // exppression 
    return num+2;
}
