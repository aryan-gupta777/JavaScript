// Immediately Invoked Function Expressions (IIFE)

//()(); = like a function without a name

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');



// Avoid Global Scope Pollution: Variables inside the function stay local and do not mess up or overwrite global variables.

// First Parentheses (function() { ... }): This wraps the function and turns it into a function expression instead of a standard function declaration.
// Second Parentheses (): This part immediately calls or invokes the function right on the spot.

//      ()             ();
//      |              |
//      V              V
//     fun define     execution call
