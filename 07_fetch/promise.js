// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){

    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked = false;

            if(dogwalked){
              resolve("you walk the dog")
            }
            else{
                reject("you didn't walk the dog")
            }
        },1500);
    })
}

function cleanKitchen(){
     
     return new promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("you clean the kitchen")
            }
            else{
                reject("you didn't clean the kitchen")
            }
        },2500)
     })
}

function takeOutTrach(){
      
     return new promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("you take out the trach")
            }
            else{
                reject("you didn't takeout the trach")
            }
        },500)
     });

}


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrach()})
         .then(value => {console.log(value); console.log("you finished all the chores !")})
         .catch(error => console.log(error));
         
        