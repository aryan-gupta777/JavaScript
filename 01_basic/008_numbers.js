// ----------------------------------numbers---------------------------------
const count =400

// console.log(count);

const c=new Number(100)

// console.log(c.toFixed(2));  //100.00
// console.log(c.toString().length); //use the string method in the number datatype

const other=123.65446

// console.log(other.toPrecision(4)) //123.6
// console.log(other.toFixed(2)); //123.65


const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN')); //use to read the number


//----------------------------------maths-------------------------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //  value is between 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //formula

