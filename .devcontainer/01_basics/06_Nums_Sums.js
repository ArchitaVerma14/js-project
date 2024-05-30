const score= 400

const balance = new Number(100)
console.log(score);
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

const anothernum= 325.22
//console.log(anothernum.toPrecision(4));

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++ MATHS ++++++++++++++++++

/*console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.floor(4.8));
console.log(Math.min(4,46,24,1,6));
console.log(Math.max(4,46,24,1,6)); */
console.log(Math.random()); // always give values between 0 and 1
console.log((Math.random()*10) + 1); // after multiplying wit 10 the value shifts to left 
console.log(Math.floor(Math.random()*10) + 1); // we add 1 so that value will be more than 0  till 9 always 

const min=10
const max=30

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



