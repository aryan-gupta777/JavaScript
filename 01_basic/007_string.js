const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let x = `
    This is a
    multiline
    string`

console.log(x);

const s=new String("aryan")

console.log(s[0]);    // a
console.log(s.length);// 5
console.log(s.at(1));// r
console.log(s.charAt(4));// n
console.log(s.indexOf("y"));// 2
console.log(s.toLocaleUpperCase());// ARYAN
console.log(s.substring(0,4));// arya
console.log(s.slice(1,4));// rya


const newname="   arjun    ";

console.log(newname);  //   arjun    
console.log(newname.trim());//arjun



const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))//false

const splitname="aryan-gupta"

console.log(splitname.split('-'));//[ 'aryan', 'gupta' ]


let s1 = "Ajay"
let s2 = new String("Ajay");

console.log(s1 == s2);  // true (type coercion)
console.log(s1 === s2); // false (strict comparison)
console.log(s1.localeCompare(s2)); // 0 (means they are equal lexicographically)


