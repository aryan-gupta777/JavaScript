// for of

// ["", "", ""]
// [{}, {}, {}]


const arr =[1,2,3,4,5]

for (const i of arr) {
    // console.log(i);  // 1,2,3,4,5
}

const greeting ="! hello"
for (const i of greeting) {
    // console.log(i)
}

// --------------------map-----------------------------

const m =new Map()

m.set("os","operating system")
m.set("net","networking")
m.set("dbms","data base managment system")
m.set("oops","object oriented pragramming")

// console.log(m.keys()); //  {'os', 'net', 'dbms', 'oops' }
// console.log(m.values());//  {d 'operating system', 'networking', 'data base managment system','object oriented pragramming' }
// console.log(m);  // both printed

// console.log(m.get("os"));  // get returns the value of the key searched

// for (const [key,value] of m) {
//     console.log(key ,":-",value);
// }

const myObject={
    game1:'nfs',
    game2:'spiderman'
}

// the down code will not work (forof loop) beacuse it cannot iterate the object
// for (const [key,value] of Object.entries(myObject)) {
//     console.log(key ,":-",value);
// }
// To iterate over an object we use (forin loop)

for (const i in myObject) {
    console.log(i,":", myObject[i]);
}