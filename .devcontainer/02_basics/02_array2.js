const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = [" superman", "flash", "batman"]

//marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[2][1]);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

// marvel_heros.concat(dc)
// console.log(marvel_heros);

const all_new_Heros = [...marvel_heros, ...dc]
//console.log(all_new_Heros);

const another_Array= [1,2,3,[4,546,23],3432,44,[3,2,[3,2]]]

const real_array2= another_Array.flat(Infinity)
console.log(real_array2);


console.log(Array.isArray("arsg"));
console.log(Array.from("arsg"));
console.log(Array.from({name: "arsg"})); // interesting

let score1 = 100
let score2 = 224
let score3 = 400

console.log(Array.of(score1, score2, score3));
