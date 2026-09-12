const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}


// user.welcomeMessage()

// user.username="sam"
// user.welcomeMessage()

// console.log(this)


// function a(){
//     let username="aryan"
//     console.log(this.username);
    
// }
// a()



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai =() => {
    username="Aryan"
    console.log(this);
    
}

// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo =(num1,num2)=> num1+num2
// const addTwo =(num1,num2)=> (num1+num2)

const addTwo = (num1, num2) => ({username: "aryan"})

// console.log(addTwo(2,5));


//notes

// browser : global object = windows object
// vscode  : node obj = empty object

// ()=>{}   arrow function

// {} -> return is required
// () -> return is not required





