const mynumbers = [1,3,25,35,234,2,3,2]

//const newNums= mynumbers.map( (num) => num+10) 
//or
//const newNums= mynumbers.map( (num) =>{ return num+10})

const newNums = mynumbers
                   .map( (num) => num*10 )
                   .map( (num) => num +1)
                   .filter( (num) => num >=500)
                  
console.log(newNums);