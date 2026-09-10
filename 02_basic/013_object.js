const tinderuser = {};

tinderuser.name = "aryan";
tinderuser.age = 21;
tinderuser.isloggedIN = true;

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedIN'));



const regularuser = {
  email: "arjun@gmail.com",
  fullname: {
    userfullname: {
      firstname: "arjun",
      lastname: "gupta",
    },
  },
};

// console.log(regularuser.fullname.userfullname.firstname);


const obj1={1:"A",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3={...obj1,...obj2} //spread operator 

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

// console.log(users[2].id);


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course   // object de-structureing = {variables : Renaming variables} 

// console.log(courseInstructor);
console.log(instructor);






