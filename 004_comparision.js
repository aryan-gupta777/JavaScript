// The reason is that an equality check == and 
// comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.
// avoide this type of comparision

console.log("2">1);
console.log("02">1);

console.log("null : ");

console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log("undefine :" );


console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);


// === ->triple equal check the dataype also

console.log("2"===2);


