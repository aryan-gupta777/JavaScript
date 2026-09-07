let mydate=new Date();

console.log(mydate.getDate());
console.log(mydate.getFullYear());


console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());


console.log(typeof mydate);

// ---------------declare date---------------------
let myCreatedDate=new Date(2023,0,5,11,11,11)  // date (year, month, day, hour, min, second)
// in js month counting start from (0=jan) to (11-dec)

let ddmmyy=new Date("5-1-2023")

console.log("mm-dd-yy = " + myCreatedDate.toLocaleString());
console.log(`dd-mm-yy = ${ddmmyy.toLocaleString()}`); 

let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(ddmmyy.getTime());

console.log(Math.floor(myTimeStamp/1000)); //removed milisecond  

mydate.toLocaleString('default',{
    weekday: "long",
})

