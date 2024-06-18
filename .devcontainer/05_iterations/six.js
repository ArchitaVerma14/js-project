// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values= coding.forEach( (item) => {         //foreach do dont return any value
//     //console.log(item);
//     return item
// })

// console.log(values);

 const mynums= [1,24,2,43,2,2]
// const newNum = mynums.filter( (num) =>{          // while using scope mention RETURN then only value will be printed
//     return num > 4                               // otherwise dont use scope directly write conditions
// } )

// const newNum = []
// mynums.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

    let userBooks = books.filter( (bk) => bk.genre==='History')
     userBooks = books.filter( (bk) => { 
        return bk.publish >= 1995 && bk.genre ==='History'})

  console.log(userBooks);