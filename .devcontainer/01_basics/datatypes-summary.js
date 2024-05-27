// PRIMITIVE (call by value)

//7 Types : String, Number, Boolean, Null ( means empty not 0 not even empty string), undefined( means variable is defined but not its value), Symbol (used to make a value unique), BigInt

const score= 100 
const scoreValue= 100.4
const isloggedIn= false

const id=Symbol('123')
const anotherID=Symbol('123')
console.log(id===anotherID);


//const bigNum=1853723538365832756875328536n



//NON PRIMITIVE (reference type)

//Array, Objects, Functions 

const heros=["ironman","captain america","black panthor"]
let myObj={
    name:"archita",
    age:32,
}

const myFunction= function(){
    console.log("hello archita");
}

console.log(typeof anotherID);

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/