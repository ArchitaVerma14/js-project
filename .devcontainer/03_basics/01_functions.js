
function sayMyname(){
console.log("A");
console.log("R");
console.log("C");
console.log("H");
console.log("I");
console.log("T");
console.log("A");
}

//sayMyname()

// function addTwonum(num1 ,num2){            //parameters are num1 num2 -when function is defined
//     console.log( num1 + num2);
   
// }

function addTwonum(num1 ,num2){            //parameters are num1 num2 -when function is defined
//    let result = num1  + num2
//    return result
   //console.log("archi");             // nothing gets printed after console log
   return num1 + num2
}

// addTwonum(443,3)                        // arguments are 443,3 - when func is called
// addTwonum(443,"3")
// addTwonum(443,"a")
// addTwonum(443,null)

const result = addTwonum(443,3)

//console.log("Result: ", result);

function loginUserMsz(username = "sam"){
    if(!username){
            console.log("Please enter a username");
            return
    }
    return `${username} just logged in`
}

//console.log(loginUserMsz("archita"));
//console.log(loginUserMsz("rohan"));

function calculateCartPrice(val1,val2,...num1){    //rest operator is ...num1
      return num1
}
console.log(calculateCartPrice(32,3252,32,22));   // here val1 is 32, val2 is 3252 and rest are other nums thats why rest nums are only printed

const user = {
    username: "arvcg",
    price: 244
}

function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);

}
//handleObj(user)
handleObj({
    username: "sam",
    price: 2432
})

const myarr1= [24,325,124,2352,234]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myarr1));