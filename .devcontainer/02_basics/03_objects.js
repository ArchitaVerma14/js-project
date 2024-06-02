// singleton
//Object.create

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name : "Archita",
    "full name" : "Archita Verma",
    [mySym]: "mykey1",
    age : 13,
    phone : 2142352,
    email : "archi.24@gmail.com",
    isLoggedIn : false,
    loginDays : ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log( jsUser[mySym]);
// console.log(jsUser.phone);

jsUser.email = "architaksd.com"
//Object.freeze(jsUser)
jsUser.email = "architaksd0986.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("helloe js user");
}

jsUser.greeting2 = function(){
    console.log(`helloe js user , ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());