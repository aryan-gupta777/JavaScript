const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const i in programming) {
  //   console.log(programming[i]);  // forin loop returns the index, not the value like what forof loop returns
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// ❌ This will print absolutely nothing to the console
for (const key in map) {
  console.log(key);
}
// map is not iterateble in for in

// note :the for...in loop is specifically designed to iterate over all enumerable, non-symbol properties (the keys) of an object.
//       the for...in loop is designed specifically for objects to grab their property names (keys).
