const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach(  (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme )

// coding.forEach( (item , index , arr)=> {
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        languagename: "javascript",
        languagefile: "java"
    },
    {
        languagename: "python",
        languagefile: "py"
    },
    {
        languagename: "java",
        languagefile: "java"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languagename);
})