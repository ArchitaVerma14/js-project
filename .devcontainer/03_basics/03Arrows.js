const user = {
    username: "archita",
    price: 232,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "archita"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "archita"
//     console.log(this.username);
// }
const chai = () => {
    let username = "archita"
    console.log(this);
}


//chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2                                  //explicite retune
// }

//const addtwo = (num1, num2) =>  num1 + num2

//const addtwo = (num1, num2) =>  (num1 + num2)          //implicite return

const addtwo = (num1, num2) =>  ({username: "archita"})        //implicite return


console.log(addtwo(2,3));


// const myArray = [3,24,23,2]
// myArray.forEach()


