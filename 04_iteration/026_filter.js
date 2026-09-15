const coding = ["js", "ruby", "java", "python", "cpp"];

// const x=coding.forEach((item)=>{
//    console.log(item);
//    return item
// })

// console.log(x);  //undefine  (for each loop does not give any return type)
// console.log(typeof x);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const y = myNums.filter((num) => {
  return num > 4;
});

// console.log(y);  // filter function hava a retuurn type
// console.log(typeof y);

// const newNumber=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNumber.push(num)
//     }
// })

// console.log(newNumber);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBook = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

// console.log(userBook);










const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);




