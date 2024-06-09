// if
// const isuserloggedin = true
// const temperature = 41

// if( temperature === 40 ){
//     console.log("less than 50");
// } else{
//     console.log("temperature more than 50");
// }
// console.log("execute");
// >, <,  <=, >=, ==, !=, ===, !==

// const score = 300
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


//const balance = 1000

//if(balance > 500) console.log("test"), console.log("test2");

// if( balance <500){
//        console.log("less than");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userloggedin = true
const debitcard= true
const loggedinfromGoogle = false
const loggedinfromEmail = true


if(userloggedin && debitcard && 2==3){
    console.log("allowed to buy course");
}
if(loggedinfromEmail || loggedinfromGoogle){
    console.log("user logged in");
}