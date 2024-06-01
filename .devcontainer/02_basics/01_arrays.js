// Arrays

const myArr = [0,13,53,241,63]
const Myheros = ["shaktiman", " ironman"]
const myArr2 = new Array(1,324,242,3)

console.log(myArr[3]);

// Array methods

// myArr.push(5)
// myArr.push(50)
// myArr.pop()

//myArr.unshift(10)
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(13));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


//Slice(start index, last index[not included] )  // return specific portion of the array original array don't manipulated remain same basically it creates a shallow copy of original array
// Splice (start index, last index [included] ) // removes specific part of from original array and manipulate it