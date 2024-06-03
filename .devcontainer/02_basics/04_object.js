//const tinderUser = new Object() // singleton object
const tinderUser = {}  // non singleton obeject

tinderUser.id = "1324abhdc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularuser = {
    email : "samy214@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sammy",
            lastname: "verma"
        }
    }

}
//console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1 , obj2}
//const obj3 = Object.assign( {},obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "sdf@gmail.com"
    },
    {
        id: 1,
        email: "sdf@gmail.com"
    },
    {
        id: 1,
        email: "sdf@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));



const course ={
    coursename: "js in hindi",
    price: "242",
    courseTeacher: "hitesh"
}
//course.courseTeacher

const {courseTeacher: teacher} = course

console.log(teacher);

// {
//     "name": "hitesh", // react
//     "price": "free",
//     "coursename": "js in hindi"
// }

[
    {},
    {},
    {}
]