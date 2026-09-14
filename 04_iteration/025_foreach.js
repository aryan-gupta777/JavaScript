// The forEach() method of Array instances executes a provided function once for each array element.

const arr = ["a", "b", "c"];

// # using normal function
arr.forEach(function fun(item) {
  //     console.log(item);
});

// # using arrow function
arr.forEach((item, index, arr) => {
  //     console.log(item,"-",index,"-",arr);
});

function fun(item, index, arr) {
  console.log(item, "-", index, "-", arr);
}
// arr.forEach(fun)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach((item)=>{
//    console.log(item.languageFileName);
   
// })

// using console.table 
myCoding.forEach((item)=>{
   console.table(item);
   
})