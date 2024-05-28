const name= "esgsg"
const repocount=66

//console.log(name+ repocount+ " Value");

//console.log(`hellow my name is ${name} and my repocount is ${repocount}`);

const gameName= new String('Archititech-hc-com')
/*console.log(gameName[0]);
console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(6));
console.log(gameName.toUpperCase());*/
console.log(gameName.indexOf('i'));

const newString =gameName.substring(-8,4)
console.log(newString);

const anotherString= gameName.slice(-12,4)
console.log(anotherString);


const newString1 ="    arch   "
console.log(newString1);
console.log(newString1.trim());

const url= "https://archi.com/archi%@0"

 console.log(url.replace('%@','-'));

 console.log( url.includes('verma'));
 console.log(gameName.split('-'));