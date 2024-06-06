//var c=300                      // GLOBAL SCOPE
let a =300

if(true){                     //BLOCK SCOPE are in curly braces
    let a = 10
    const b= 20
   //console.log("INNER:" , a);

}

//console.log(a);
//console.log(b);



function one(){
    const username= "archi"

    function two(){
        const website = "youtueb"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()


if(true){
    const username = "archi"
    if(username === "archi"){
        const website ="youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++
console.log(addone(4));
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num +3
}
