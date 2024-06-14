// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,4,2,3]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world"
// for (const greet of greetings) {
//      console.log(`Each character is ${greet}`);   
// }


// Maps

const map = new Map()            // Maps gove unique value with the same sequence as entered
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map);
for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key,value] of myObj) {
//     console.log(key, ':-', value);
    
// }