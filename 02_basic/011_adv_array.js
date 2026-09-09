const marvel = ["ironman", "spiderman", "hulk"];
const dc = ["batman", "superman", "flash"];

// marvel.push(dc)
// console.log(marvel);

// console.log(marvel[3][1]);

// const allhero=marvel.concat(dc)
// console.log(allhero);

const allhero = [...marvel, ...dc]; // this is better then (concat method) because we can add multiple arr
// console.log(allhero);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);






console.log(Array.isArray("aryan")) //ask weather it is a arr or not 
console.log(Array.from("aryan")) //[a,r,y,a,n] converting into array
console.log(Array.from({name: "aryan"})) // interesting  //object {}




// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));