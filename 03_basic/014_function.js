function username(){
   console.log('a');
   console.log('b');
   console.log('c');
   console.log('d');
   console.log('e');
   
}

// username()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function TwoAddNumber(num1,num2){
    return num1+num2;
}

// console.log(TwoAddNumber(5,3));

function LoginUserMessage(username="sam"){  // sam is default name when parameter is not passed
    if(!username){  //(username === undefine)
     console.log('please enter your name');
     return;
    }

    return `${username} just logged in`
}

// console.log(LoginUserMessage("Aryan"));

function calculateCarPrice(val1,val2,...num1){  // (... -> rest operator)
    // val1=>200
    // val2=>400
    // num1=>[500,2000]

    return num1;
}

// console.log(calculateCarPrice(200, 400, 500, 2000))


const user={
    name:"aryan",
    age:21
}

function handleObject(anyObject){
    console.log(`my name is ${anyObject.name}\nmy age is ${anyObject.age}`);
} 

// handleObject(user)

handleObject({username:"aryan", age:22})


const arrNewarray=[200,300,400,500]

function value(secondObject){
    return secondObject[1]
}

// console.log(value(arrNewarray));

console.log(value([100,200,300,400]));

