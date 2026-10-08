// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    pending -> resolve or reject
//                    new promise((resolve,reject) => {asynchronous code})
//

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;

      if (dogwalked) {
        resolve("you walk the dog");
      } else {
        reject("you didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("you clean the kitchen");
      } else {
        reject("you didn't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;

      if (trashTakenOut) {
        resolve("you take out the trash");
      } else {
        reject("you didn't take out the trash");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("you finished all the chores !");
  })
  .catch((error) => console.log(error));

// if the first promise fails then the rest of the comming promises will not work
// ex - if the walkdog() give the false then the rest of the cleankitchen and takeouttrack will not work

// promise
// .then(()=>{ })    //handle success
// .catch(() => { }) //handle error
// .finally(() =>{ })//run once finished

/*--------------async syntax---------------
async function myfun(){
    try {
        const result = await mypromise;  //handle success
    } 
    catch (error){
        //handle error
    }
    finally{
        // run once finished
    }
}

---------------------------------------------*/
