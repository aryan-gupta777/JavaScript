const arr1 = [1, 2, 3, 4, 5];

// console.log(arr1); // print the array
// console.log(arr1[0]);

// ---------(push method)-----------
// arr1.push(6);
// console.log(arr1);

// ---------(pop method)------------
// arr1.pop();
// console.log(arr1);

// arr1.shift(); // delete the first index element
// console.log(arr1);

// arr1.unshift(0); // add the element on the first index
// console.log(arr1);

// console.log(arr1.includes(9)); // tells weather the element is present in the array or not (return bool)
// console.log(arr1.indexOf(3)); // locate the index of the element 


// const newarr= arr1.join() // return the array in string 
// console.log(newarr);
// console.log(typeof newarr);
// console.log(typeof arr1);
// console.log(newarr[0]);


// --------------------(slice and splice method)-------------------------

console.log("A : ",arr1);


console.log(arr1.slice(0,3)); //Returns a copy of a section of an array (For example, -2 refers to the second to last element of the array)

console.log("B : ",arr1);

console.log(arr1.splice(0,3)); //Removes elements from an array and returning the deleted elements.

console.log("C : ",arr1);

// slice() does not modify the original array (it returns a shallow copy of a portion of the array),
// splice() directly modifies (mutates) the original array by adding, removing, or replacing elements




