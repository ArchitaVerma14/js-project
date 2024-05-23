console.log(2>4);
console.log(2==4);
console.log(2<4);


console.log("2">1);
console.log("02">1);

console.log(null==0);
console.log(null>0);
console.log(null>=0);// the reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// TRY TO AVOID THESE TYPES OF CONVERSIONS AS THEY MAY CREATE CONFUSIONS
// === STRICT CHECK - it will check value and data types also .

console.log("3" ===2);
console.log(undefined == null);
console.log(undefined == undefined);
console.log(null == null);
console.log(null== undefined);
/* Type coercion in JavaScript is the process by which the JavaScript engine converts a value from one type to another to perform an operation. This happens implicitly when using the loose equality operator (==), among other scenarios.
console.log(undefined == null);
undefined and null are considered equal with the == operator.
JavaScript's type coercion treats undefined and null as equal.
Result: true

console.log(undefined == undefined);
Both values are undefined.
Same type and value.
Result: true

console.log(null == null);
Both values are null.
Same type and value.
Result: true

null == undefined; 
Explanation:
null and undefined are different types (null is an object, undefined is a primitive).
When using the loose equality operator (==), JavaScript treats null and undefined as equal.
This is a special case in JavaScript's type coercion rules where null and undefined are considered equal, despite being different types.
Result: true */