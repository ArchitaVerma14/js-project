// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);      // 1st() is for function defination and 2nd() is for its execution
})();        // apply semicolon explicitely to stop the immediate funtion                

// IIFE is used to call a function immediatle but most importantly it is used - sometimes we get difficulties due to global scope polutions
// so to remore the declaraions or variable of that polution we use IIFE


(  (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )(`arhi`)